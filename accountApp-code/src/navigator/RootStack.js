import { createStackNavigator } from 'react-navigation';
import Controloutcomecontainer from '../component/container/Controloutcomecontainer'
import Homeview from '../component/presentational/Homeview'
import Addlistoutcomecontainer from '../component/container/Addlistoutcomecontainer'
import Editlistoutcomecontainer from '../component/container/Editlistoutcomecontainer'
import Addincomecontainer from '../component/container/Addincomecontainer'
import Paycontainer from '../component/container/Paycontainer'
import Accountcontainer from '../component/container/Accountcontainer'
import Showallincomelist from '../component/presentational/Showallincomelist'
import Editlistincomecontainer from '../component/container/Editlistincomecontainer'

export const RootStack = createStackNavigator(
    {
        Home: Homeview,
        Controlout: Controloutcomecontainer,
        Addoutcome: Addlistoutcomecontainer,
        Editlistoutcome: Editlistoutcomecontainer,
        Addincome: Addincomecontainer,
        Paycontainer: Paycontainer,
        Accountcontainer: Accountcontainer,
        Incomeview: Showallincomelist,
        Incomeedit: Editlistincomecontainer
    },
    {
        initialRouteName: 'Home',

        navigationOptions: {
            headerStyle: {
                backgroundColor: '#f6c04b',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {

                color: 'black',
                alignSelf: 'center',
                width: '100%',
                flex: 4,
                textAlign: 'center',
                justifyContent: 'center',
                fontSize: 40,


            },
        }
    }


);
