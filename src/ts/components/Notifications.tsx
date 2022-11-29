import React from 'react';

import { NotificationsProvider as MantineNotificationsProvider } from "@mantine/notifications";

type Props = {
    /** Your application */
    children?: React.ReactNode;
};

/**
 * Mantine notifications system. For more information, see: https://mantine.dev/others/notifications/
 */
const Notifications = (props: Props) => {

    return (
        <MantineNotificationsProvider >
            {props.children}
        </MantineNotificationsProvider>
    );
};


Notifications.defaultProps = {};

export default Notifications;
