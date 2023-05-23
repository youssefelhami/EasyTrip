import { Edit, NumberInput, SimpleForm, TextInput } from 'react-admin';

export const TripEdit = () => {
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
    <Edit mutationMode='pessimistic' transform={transform}>
        <SimpleForm>
            <TextInput source="city" />
            <TextInput source="country" />
            <NumberInput source="ticket" />
            <NumberInput source="daily_accommodation" />
            <NumberInput source="daily_food" />
            <NumberInput source="daily_miscellaneous" />
            <TextInput source="image" />
        </SimpleForm>
    </Edit>
    )
}