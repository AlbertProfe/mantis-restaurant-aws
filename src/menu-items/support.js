// assets
import { ChromeOutlined, QuestionOutlined } from '@ant-design/icons';
import { MenuBookOutlined, TableRestaurantOutlined } from '@mui/icons-material';

// icons
const icons = {
  ChromeOutlined,
  QuestionOutlined,
  MenuBookOutlined,
  TableRestaurantOutlined
};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const support = {
  id: 'restaurant',
  title: 'Restaurant',
  type: 'group',
  children: [
    {
      id: 'tables-restaurant',
      title: 'Tables Restaurant',
      type: 'item',
      url: '/tables-restaurant',
      icon: icons.TableRestaurantOutlined
    },
    {
      id: 'menus-restaurant',
      title: 'Menus Restaurant',
      type: 'item',
      url: '/menus-restaurant',
      icon: icons.MenuBookOutlined
    },
    {
      id: 'documentation',
      title: 'Documentation',
      type: 'item',
      url: 'https://codedthemes.gitbook.io/mantis/',
      icon: icons.QuestionOutlined,
      external: true,
      target: true
    }
  ]
};

export default support;
