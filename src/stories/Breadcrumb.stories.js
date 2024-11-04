import Breadcrumb from '../components/Breadcrumb.vue'

export default {
  title: 'Example/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
  argTypes: {

  }
}

export const Primary = {
  args: {
    items: [{title:'Home', url:'#'},{title:'Child', url:'#'},{title:'Current', url:'#'}]
  },
}
