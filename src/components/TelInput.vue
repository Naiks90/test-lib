<template>
    <div class="phone-input" :class="classWrapper">
        <div class="phone-input__label" v-if="label">{{ label }}</div>
        <div :class="['phone-input__inner', { disabled: disabledData }]">
            <div
                v-click-outside="clickedOutside"
                aria-label="Country Code Selector"
                aria-haspopup="listbox"
                :aria-expanded="open"
                role="button"
                :class="['phone-input__dropdown', { open: open, disabled: disabledData }]"
                @click="toggleDropdown">
                <span class="phone-input__selection" :class="{ 'phone-input__selection_open': open }">
                    <template v-if="activeCountry?.iso2">
                        <span :class="['phone-input__flag', (activeCountry.iso2).toLowerCase()]"></span>
                        <span class="phone-input__code">{{ activeCountry.iso2 }}</span>
                        <span class="phone-input__country-code"> +{{ activeCountry.dialCode }} </span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </template>
                </span>
                <transition name="phone-input__open-list">
                    <ul v-if="open" ref="refList" class="phone-input__dropdown-list" :class="{'phone-input__dropdown-list_offset': !label}" role="listbox">
                        <div class="phone-input__search-box-wrapper">
                            <input class="phone-input__search-box" aria-label="Search by country name or country code" placeholder="Type a country..." type="text" v-model="searchQuery" @click.stop />
                        </div>
                        <li v-for="(pb, index) in sortedCountries" role="option" :class="['phone-input__dropdown-item', getItemClass(index, pb.iso2)]" :key="pb.iso2 + (pb.preferred ? '-preferred' : '')" @click="chooseCountry(pb.iso2)">
                            <span :class="['phone-input__flag', pb.iso2?.toLowerCase()]"></span>
                            <span>{{ pb.name }}</span>
                            <span> +{{ pb.dialCode }} </span>
                        </li>
                    </ul>
                </transition>
            </div>
            <div v-bind="$attrs" class="phone-input__input-wrapper" :class="{ 'phone-input__input-wrapper_error': isValidError }">
                <input v-model.trim="phone" type="tel" :class="['phone-input__input', 'phone-input__phone']" :disabled="disabledData" :maxlength="25" :placeholder="placeholder" @blur="onBlur" @focus="onFocus" @keyup.enter="onEnter" />
                <div class="phone-input__input-prepend">
                    <template v-if="isApproveMode">
                        <button v-if="disabledData" class="phone-input__btn-svg" @click="disabledData = !disabledData">
                            <svg width="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 6L18.1632 9.11477L9.9313 17.4746L6.56985 17.7248L6.76812 14.3598L15 6Z" stroke="#D9D9D9" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                        <div v-else class="phone-input__wrapper-approve">
                            <button class="phone-input__btn-svg" @mousedown.prevent @click.prevent="submit">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="16" height="16" rx="8" fill="#00D2FF" />
                                    <rect x="0.374483" y="0.374483" width="15.251" height="15.251" rx="7.62552" stroke="#00D2FF" stroke-width="0.748966" />
                                    <path d="M12 5.33337L6.5 10.6667L4 8.24247" stroke="#100E0F" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                            <button @mousedown.prevent @click.prevent="cancel" class="phone-input__btn-svg">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="8" cy="8" r="8" fill="#D9D9D9" />
                                    <path d="M12 4L4 12M4 4L12 12" stroke="#141213" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </template>
                    <slot name="prepend">
                    </slot>
                </div>
            </div>
            <slot name="error-text">
                <span v-if="isValidError" class="phone-input__error">Phone invalid</span>
            </slot>
        </div>

    </div>
</template>

<script>
import { allCountries } from "../utils/constants"
import clickOutside from '../directives/click-outside'
import { parsePhoneNumberFromString, isPossiblePhoneNumber, isValidPhoneNumber, validatePhoneNumberLength } from 'libphonenumber-js'
export default {
    inheritAttrs: false,
    emits: ['update:modelValue', 'isValid', 'submit', 'cancel'],
    directives: {
        clickOutside,
    },
    props: {
        disabled: Boolean,
        placeholder: {
            type: String,
            default: ''
        },
        defaultCountry: {
            type: String,
            default: 'US'
        },
        modelValue: {
            type: String,
            default: ''
        },
        classWrapper: {
            type: String,
            default: ''
        },
        isApproveMode: {
            type: Boolean,
            default: false
        },
        label: {
            type: String,
            default: ''
        }
    },
    mounted() {
        this.setActiveCountry()
    },
    data() {
        return {
            phone: '',
            activeCountry: undefined,
            open: false,
            selectedIndex: null,
            searchQuery: '',
            watchActiveCountry: true,
            isValidError: false,
            disabledData: this.disabled || this.isApproveMode,
            isCloseSubmit: false
        }
    },
    watch: {
        modelValue:{
            handler(val){
                this.phone = val
            },immediate: true
        },
        phone: {
            handler(val) {
                const code = this.activeCountry.iso2 ?? null
                const parsePhoneNumber = parsePhoneNumberFromString(val, code)
                if(parsePhoneNumber){
                    this.setActiveCountry(parsePhoneNumber.country)
                    this.phone = parsePhoneNumberFromString(val, code).format("NATIONAL")
                    this.$emit('update:modelValue', parsePhoneNumber.number)
                }
            },
        },
        activeCountry(val) {
            if (this.watchActiveCountry) {
                const parsePhoneNumber = parsePhoneNumberFromString(this.phone, val?.iso2)
                if (this.isValid) {
                    this.setActiveCountry(parsePhoneNumber.country)
                    this.phone = parsePhoneNumberFromString(this.phone, val.iso2).format("NATIONAL")
                }
                if (parsePhoneNumber) this.$emit('update:modelValue', parsePhoneNumber.number)

            }
        },
        isValid: {
            handler(val) {
                this.$emit('isValid', val)
            }, immediate: true
        },
    },
    computed: {
        isValid() {
            const isValid = isValidPhoneNumber(this.phone, this.activeCountry?.iso2)

            return isValid
        },
        sortedCountries() {
            const country = allCountries ?? []
            if (this.searchQuery) {
                return country.filter(el => el.name.toLowerCase().includes(this.searchQuery.toLowerCase()))
            } else {
                return country
            }
        }
    },
    methods: {
        clickedOutside() {
            this.open = false
        },
        toggleDropdown() {
            this.searchQuery = ''
            this.open = !this.open
        },
        setActiveCountry(iso2) {
            const country = iso2 ?? this.defaultCountry
            this.activeCountry = allCountries.find(el => el.iso2 === country)
        },
        getItemClass(index) {
            const highlighted = this.selectedIndex === index
            return {
                highlighted,
            }
        },
        chooseCountry(iso2) {
            this.setActiveCountry(iso2)
            !this.isValid && this.phone?.length ? this.isValidError = true : this.isValidError = false
        },
        onFocus() {
            this.isValidError = false
            this.isCloseSubmit = false
        },
        onBlur() {
            if (!this.isValid) this.isValidError = true
            if (this.isValid && this.isApproveMode && !this.isCloseSubmit) this.cancel()
        },
        cancel() {
            if (this.isApproveMode) {
                this.$emit('cancel')
                this.disabledData = true
                this.isValidError = false
            }
        },
        submit() {
            if (this.isValid) {
                this.isCloseSubmit = true
                this.$emit('submit')
                this.disabledData = true
            } else {
                this.isValidError = true
            }
        },
        onEnter() {
            if (this.isApproveMode) {
                this.submit()
            }
        },
        setPhone(phone) {
            this.phone = phone
        }

    }
}
</script>
<style lang="scss" src="../assets/css/tel-input.scss"></style>
<style lang="scss" src="../assets/css/sprite.scss"></style>