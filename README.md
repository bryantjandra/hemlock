

# Hemlock: Hotel Management System

Hemlock is a custom-built application designed to streamline the management of bookings, rooms, and guests at "Sierra," a fictional boutique hotel. This internal platform provides hotel employees a robust interface for handling daily operations, including guest check-ins, room management, and real-time analytics via a dynamic dashboard. 

Explore the live application at: [Hemlock Hotel](https://hemlock-hotel.netlify.app/).

## Features

### Advanced Booking Management
- **Booking Lifecycle Management**: Track bookings through various stages—“unconfirmed,” “checked-in,” and “checked-out.” Bookings can be filtered and managed based on these statuses.
- **Detailed Booking Information**: Displays comprehensive booking details, including arrival/departure dates, number of nights, number of guests, guest observations, and additional services like breakfast options.
- **Payment Handling**: Supports check-in workflows where payments can be confirmed after being processed outside the app, ensuring flexibility in handling various guest payment scenarios.

### User Authentication & Authorization
- **Secure Login System**: Implemented using Supabase's authentication services, ensuring that only verified hotel staff can access the application.
- **Account Management**: Users can update their profiles, change passwords, and upload avatars directly within the app, with all data securely managed via Supabase.
- **Role-Based Access Control**: Future-proofed for role differentiation, supporting various levels of access for admin, staff, and potential customer-facing roles.

### Comprehensive Room Management
- **CRUD Operations**: Complete suite of functionalities for managing hotel rooms, including creating, reading, updating, and deleting room records.
- **Photo Uploads**: Integrated image upload feature for room photos, utilizing client-side validation and Supabase storage capabilities.
- **Dynamic Pricing and Discounts**: Support for setting and adjusting room prices and promotional discounts directly from the admin interface.

### Operational Dashboard & Analytics
- **Daily Activity Overview**: Provides real-time insights into guest check-ins and check-outs for the current day, enabling staff to efficiently manage daily operations.
- **Sales & Booking Analytics**: Displays detailed statistics on bookings, revenue, check-ins, and occupancy rates over user-selected time frames (7, 30, or 90 days).
- **Interactive Sales Charts**: Leveraging Recharts, provides visual insights into total sales and extras (e.g., breakfast), aiding in data-driven decision-making.
- **Stay Duration Analytics**: Tracks and visualizes stay durations, offering valuable metrics for optimizing room occupancy and pricing strategies.

### Application-Wide Settings Management
- **Configurable Options**: Admins can adjust key parameters such as breakfast pricing, booking duration limits (min/max nights), and maximum guest capacities per room.
- **Dark Mode**: Full support for dark mode with context-aware styling, enhancing user comfort and accessibility across different lighting environments.

## Tech Stack

### Frontend
- **React**: Utilized for component-based architecture, ensuring high performance and maintainability.
- **React Router**: Implements client-side routing, providing a seamless navigation experience within the SPA (Single Page Application).
- **Styled Components**: Manages CSS-in-JS styling with theme support for dark and light modes, enhancing maintainability and scalability.
- **React Query**: Handles data fetching, caching, synchronization, and state management with server data, significantly reducing boilerplate and improving performance.
- **Context API**: Provides global state management for UI-related states such as dark mode, enhancing user experience consistency.
- **React Hook Form**: Optimizes form state management with easy-to-use validation, reducing overhead and simplifying form handling.
- **Recharts**: Delivers advanced, responsive charting capabilities for visual data representation of sales and stay analytics.
- **React Icons & React Hot Toast**: Elevates the UI with a wide variety of icons and customizable notifications for improved user feedback.

### Backend
- **Supabase**: Acts as the Backend-as-a-Service, providing a fully managed PostgreSQL database, real-time data synchronization, RESTful APIs, and integrated authentication.
- **Role-Based Access Control (RBAC)**: Configured within Supabase to handle different user roles and permissions, securing sensitive data and actions.
- **Serverless Functions**: Potential integration with serverless functions for handling complex business logic, such as booking confirmations and notifications.

### Libraries & Utilities
- **date-fns**: Used extensively for date manipulation and formatting, streamlining the handling of booking dates and analytics periods.
- **Custom Hooks**: Developed multiple custom hooks (`useLocalStorageState`, `useDarkMode`, `useRecentBookings`, etc.) for optimized state management and reusability across components.
- **Performance Optimization**: Implemented lazy loading and code-splitting techniques to enhance performance, particularly for data-intensive components and routes.
