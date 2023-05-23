import { Create, NumberInput, SimpleForm, TextInput } from 'react-admin';

export const TripCreate = () => {
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
            <TextInput source="city" required />
            <TextInput source="country" required />
            <NumberInput source="ticket" required />
            <NumberInput source="daily_accommodation" required />
            <NumberInput source="daily_food" required />
            <NumberInput source="daily_miscellaneous" required />
            <TextInput source="image" required />
        </SimpleForm>
    </Create>
    )
}