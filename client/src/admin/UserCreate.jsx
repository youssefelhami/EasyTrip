import { Datagrid, List, TextInput, PasswordInput, Create, SimpleForm } from 'react-admin';

export const UserCreate = () => {
    const transform = (data) => {
        if(data.updatedAt) {
            delete data.updatedAt;
        }
        
        if (data.last_modified) {
            delete data.last_modified;
        }

        if (data.createdAt) {
            delete data.createdAt;
        }

        if(data.id) {
            delete data.id;
        }

        return data;
    }
    return (
        <Create mutationMode='pessimistic' transform={transform}>
            <SimpleForm>
                <TextInput source="username" required />
                <PasswordInput source="password" />
            </SimpleForm>
        </Create>
    )
};