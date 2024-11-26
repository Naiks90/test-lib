import TelInput from '../components/TelInput.vue'

export default {
  title: 'Example/Phone',
  component: TelInput,
  tags: ['autodocs'],
  argTypes: {

  }
}

export const Primary = {
//   args: {
//     items: [{title:'Home', url:'#'},{title:'Child', url:'#'},{title:'Current', url:'#'}]
//   },
}

export const Secondary = {
    render() {
      return {
        components: { TelInput },
        template: `
          <TelInput 
            v-model="phone" isApproveMode label="Phone Number" @submit="submit" @cancel="cancel" 
          />
        `,
        data() {
          return {
            phone: '+14086343220',
          };
        },
        methods:{
            cancel(){
                 this.phone = '+14086343220'
            },
            submit(){
                prompt(this.phone)
            }
        }
      };
    },
  };
    
