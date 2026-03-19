import React from 'react';

const Schema = () => {
    const organizationSchema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        'name': 'Force Sports & Wears India',
        'url': 'https://www.forcesportsindia.com',
        'logo': 'https://www.forcesportsindia.com/logo.png',
        'description': 'Premium manufacturer of customized sports jerseys and athletic apparel in Mumbai.',
        'founder': 'Anand Sanghai',
        'foundingDate': '2007',
        'sameAs': [
            'https://www.facebook.com/forcesportsindia',
            'https://www.instagram.com/forcesports_india',
            'https://www.indiamart.com/forcesports-wearsindia'
        ]
    };

    const localBusinessSchema = {
        '@context': 'https://schema.org',
        '@type': 'SportsStore',
        'name': 'Force Sports & Wears India',
        'image': 'https://www.forcesportsindia.com/og-image.jpg',
        '@id': 'https://www.forcesportsindia.com',
        'url': 'https://www.forcesportsindia.com',
        'telephone': '+91 9594021303',
        'address': {
            '@type': 'PostalAddress',
            'streetAddress': '5/31, near Jain Hospital, Motilal Nagar III, Goregaon West',
            'addressLocality': 'Mumbai',
            'postalCode': '400062',
            'addressCountry': 'IN'
        },
        'geo': {
            '@type': 'GeoCoordinates',
            'latitude': 19.1601,
            'longitude': 72.8421
        },
        'openingHoursSpecification': {
            '@type': 'OpeningHoursSpecification',
            'dayOfWeek': [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday'
            ],
            'opens': '10:00',
            'closes': '19:00'
        }
    };

    return (
        <>
            <script type="application/ld+json">
                {JSON.stringify(organizationSchema)}
            </script>
            <script type="application/ld+json">
                {JSON.stringify(localBusinessSchema)}
            </script>
        </>
    );
};

export default Schema;
