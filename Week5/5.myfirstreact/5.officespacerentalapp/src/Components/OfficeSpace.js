import React from 'react';

function OfficeSpace() {
    // Heading element stored in a JSX variable
    const pageHeading = <h1>Office Space Rental Directory</h1>;

    // Single office object detail
    const featuredOffice = {
        name: "Alpha Premium Headquarters",
        rent: 75000,
        address: "123 Tech Park Avenue, Suite 400",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&h=250&q=80"
    };

    // List of office objects to loop through
    const officeList = [
        {
            name: "Downtown Open Coworking",
            rent: 45000,
            address: "56 Corporate Boulevard",
            image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&w=400&h=250&q=80"
        },
        {
            name: "Skyline Executive Hub",
            rent: 85000,
            address: "88 Tower Road, Floor 22",
            image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=400&h=250&q=80"
        },
        {
            name: "Suburban Innovation Lab",
            rent: 58000,
            address: "102 Technology Way",
            image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=400&h=250&q=80"
        }
    ];

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            {/* Rendering the heading element */}
            {pageHeading}

            {/* Rendering a single object */}
            <div style={{ border: '2px solid #333', padding: '15px', marginBottom: '30px', borderRadius: '8px', maxWidth: '400px' }}>
                <h2>Featured Property</h2>
                <img src={featuredOffice.image} alt={featuredOffice.name} style={{ width: '100%', borderRadius: '4px' }} />
                <h3>{featuredOffice.name}</h3>
                <p><strong>Address:</strong> {featuredOffice.address}</p>
                <p>
                    <strong>Monthly Rent: </strong>
                    {/* Conditional inline CSS styling */}
                    <span style={{ color: featuredOffice.rent < 60000 ? 'red' : 'green', fontWeight: 'bold' }}>
            ₹{featuredOffice.rent}
          </span>
                </p>
            </div>

            {/* Rendering a list of objects using map() */}
            <h2>All Available Spaces</h2>
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                {officeList.map((office, index) => (
                    <div key={index} style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', width: '280px' }}>
                        <img src={office.image} alt={office.name} style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '4px' }} />
                        <h3>{office.name}</h3>
                        <p><strong>Address:</strong> {office.address}</p>
                        <p>
                            <strong>Monthly Rent: </strong>
                            {/* Conditional inline CSS styling */}
                            <span style={{ color: office.rent < 60000 ? 'red' : 'green', fontWeight: 'bold' }}>
                ₹{office.rent}
              </span>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OfficeSpace;