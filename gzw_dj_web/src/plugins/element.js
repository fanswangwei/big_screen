import Vue from 'vue'
import {
  Button,
  Message,
  Input,
  Tabs,
  TabPane,
  Form,
  FormItem,
  Row,
  Col,
  Container,
  Aside,
  Main,
  Header,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Tooltip,
  Breadcrumb,
  BreadcrumbItem,
  RadioGroup,
  RadioButton,
  Upload,
  Steps,
  Step,
  Progress,
  Radio,
  Scrollbar,
  Pagination,
  Dialog,
  Carousel,
  CarouselItem,
  Select,
  Option,
  Table,
  TableColumn,
  Switch,
  MessageBox,
  DatePicker,
  Loading,
} from 'element-ui'

Vue.use(Button)
Vue.use(Input)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Row)
Vue.use(Col)
Vue.use(Container)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Header)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Tooltip)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.use(Upload)
Vue.use(Steps)
Vue.use(Step)
Vue.use(Progress)
Vue.use(Radio)
Vue.use(Scrollbar)
Vue.use(Pagination)
Vue.use(Dialog)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Select)
Vue.use(Option)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Switch)
Vue.use(Dialog)
Vue.use(DatePicker)
Vue.use(Loading.directive)
Vue.prototype.$loading = Loading.service
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
