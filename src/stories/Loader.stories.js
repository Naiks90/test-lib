import Loader from '../components/Loader.vue'

export default {
  title: 'Example/loader',
  component: Loader,
  tags: ['autodocs'],
  argTypes: {
    size: {control: 'number'},
    width: {control: 'number'},
    size: {control: 'number'},
    colorStart: {control: 'color'},
    colorEnd: {control: 'color'}
  }
}

export const loader = {}
