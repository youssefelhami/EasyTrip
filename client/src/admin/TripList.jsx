import { Datagrid, List, NumberField, TextField } from 'react-admin';

export const TripList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="city" />
            <TextField source="country" />
            <NumberField source="ticket" />
            <NumberField source="daily_accommodation" />
            <NumberField source="daily_food" />
            <NumberField source="daily_miscellaneous" />
            <TextField source="image" />
            <TextField source="currency" />
            <TextField source="id" />
        </Datagrid>
    </List>
);