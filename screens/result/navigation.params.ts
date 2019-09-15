import {NavigationParams} from 'react-navigation';

export interface ResultNavigationParams extends NavigationParams {
  isImage: boolean;
  data: string;
}
