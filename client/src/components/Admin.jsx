import { Admin, Resource, ListGuesser, EditGuesser, ReOrderButtons } from 'react-admin'
import dataProvider from '../dataProvider'
import authProvider from '../authProvider'
import { UserList } from '../admin/UserList'
import { TripList } from '../admin/TripList'
import { TripEdit } from '../admin/TripEdit'
import { TripCreate } from '../admin/TripCreate'
import { UserCreate } from '../admin/UserCreate'

const AdminPage = () => {
    return (
        <Admin title="" basename='/admin' dataProvider={dataProvider}>
            <Resource name="users" list={UserList} create={UserCreate} />
            <Resource name="trips" list={TripList} edit={TripEdit} create={TripCreate} />
        </Admin>
    )
}

export default AdminPage