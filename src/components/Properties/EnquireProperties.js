import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const EnquireProperties = () => {
  const [otherPropertyType, setOtherPropertyType] = useState("");
  const [otherAmenity, setOtherAmenity] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [amenities, setAmenities] = useState([]);

  const handlePropertyTypeChange = (event) => {
    setPropertyType(event.target.value);
  };

  const handleAmenityChange = (event) => {
    const { id, checked } = event.target;
    if (checked) {
      setAmenities((prev) => [...prev, id]);
    } else {
      setAmenities((prev) => prev.filter((amenity) => amenity !== id));
    }
  };

  return (
    <div className="container mt-5">
        <Form>
      <h3>Property Inquiry Submission Form</h3>
      
      {/* Personal Information */}
      <h5>1. Personal Information:</h5>
      <Form.Group className="mb-3">
        <Form.Label>Full Name:</Form.Label>
        <Form.Control type="text" placeholder="Enter your full name" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Contact Number:</Form.Label>
        <Form.Control type="text" placeholder="Enter your contact number" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email Address:</Form.Label>
        <Form.Control type="email" placeholder="Enter your email address" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Preferred Contact Method:</Form.Label>
        {["Phone Call", "Email", "WhatsApp"].map((method) => (
          <Form.Check
            inline
            key={method}
            label={method}
            name="contactMethod"
            type="radio"
            id={`contactMethod-${method}`}
          />
        ))}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>City of Residence:</Form.Label>
        <Form.Control type="text" placeholder="Enter your city of residence" />
      </Form.Group>

      {/* Property Requirements */}
      <h5>2. Property Requirements:</h5>
      <Form.Group className="mb-3">
        <Form.Label>Looking to:</Form.Label>
        {["Buy", "Rent", "Lease"].map((option) => (
          <Form.Check
            inline
            key={option}
            label={option}
            name="lookingTo"
            type="radio"
            id={`lookingTo-${option}`}
          />
        ))}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Property Type:</Form.Label>
        {["Apartment", "Villa", "Plot", "Commercial Space", "Office", "Other (Specify)"].map(
          (type) => (
            <Form.Check
              inline
              key={type}
              label={type}
              name="propertyType"
              type="radio"
              id={`propertyType-${type}`}
              onChange={handlePropertyTypeChange}
            />
          )
        )}
        {propertyType === "Other (Specify)" && (
          <Form.Control
            type="text"
            placeholder="Specify Other Property Type"
            className="mt-2"
            value={otherPropertyType}
            onChange={(e) => setOtherPropertyType(e.target.value)}
          />
        )}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Location Preference:</Form.Label>
        <Form.Control type="text" placeholder="Enter preferred city" className="mb-2" />
        <Form.Control type="text" placeholder="Enter preferred area/locality" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Budget Range:</Form.Label>
        <Form.Control type="text" placeholder="Min Price (in INR)" className="mb-2" />
        <Form.Control type="text" placeholder="Max Price (in INR)" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Size Requirement:</Form.Label>
        <Form.Control type="text" placeholder="Min Built-Up Area (in sq. ft.)" className="mb-2" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Number of Bedrooms:</Form.Label>
        <Form.Control type="number" placeholder="Enter number of bedrooms" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Number of Bathrooms:</Form.Label>
        <Form.Control type="number" placeholder="Enter number of bathrooms" />
      </Form.Group>

      {/* Specific Preferences */}
      <h5>3. Specific Preferences (Optional):</h5>
      <Form.Group className="mb-3">
        <Form.Label>Furnishing Preference:</Form.Label>
        {["Fully Furnished", "Semi-Furnished", "Unfurnished"].map((option) => (
          <Form.Check
            inline
            key={option}
            label={option}
            name="furnishingPreference"
            type="radio"
            id={`furnishingPreference-${option}`}
          />
        ))}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Parking Requirement:</Form.Label>
        {["Yes", "No"].map((option) => (
          <Form.Check
            inline
            key={option}
            label={option}
            name="parkingRequirement"
            type="radio"
            id={`parkingRequirement-${option}`}
          />
        ))}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Amenities Required:</Form.Label>
        {["Swimming Pool", "Gymnasium", "Clubhouse", "Children's Play Area", "Garden", "Lift", "Other (Specify)"].map(
          (amenity) => (
            <Form.Check
              key={amenity}
              label={amenity}
              type="checkbox"
              id={`amenity-${amenity}`}
              onChange={handleAmenityChange}
            />
          )
        )}
        {amenities.includes("amenity-Other (Specify)") && (
          <Form.Control
            type="text"
            placeholder="Specify Other Amenity"
            className="mt-2"
            value={otherAmenity}
            onChange={(e) => setOtherAmenity(e.target.value)}
          />
        )}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Additional Notes:</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Any other specific requirements or preferences" />
      </Form.Group>

      {/* Timeline */}
      <h5>4. Timeline:</h5>
      <Form.Group className="mb-3">
        <Form.Label>When are you looking to move?</Form.Label>
        {["Immediately", "Within 1 Month", "1-3 Months", "3-6 Months", "6+ Months"].map((option) => (
          <Form.Check
            inline
            key={option}
            label={option}
            name="timeline"
            type="radio"
            id={`timeline-${option}`}
          />
        ))}
      </Form.Group>

      {/* Upload Reference Images/Links */}
      <h5>5. Upload Reference Images/Links (Optional):</h5>
      <Form.Group className="mb-3">
        <Form.Label>Upload Files:</Form.Label>
        <Form.Control type="file" multiple />
      </Form.Group>

      {/* Voice Input */}
      <h5>6. Voice Input (Optional):</h5>
      <Form.Group className="mb-3">
        <Form.Label>Voice Entry:</Form.Label>
        <Button variant="secondary">Activate Voice Recognition</Button>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit Inquiry
      </Button>
    </Form>
    </div>
  );
};

export default EnquireProperties;
