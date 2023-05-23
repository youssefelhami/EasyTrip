import { Datagrid, List, TextField } from 'react-admin';

export const UserList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="username" />
            <TextField source="id" />
        </Datagrid>
    </List>
);