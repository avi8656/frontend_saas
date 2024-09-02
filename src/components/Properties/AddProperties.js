import React, { Fragment, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const AddProperties = () => {

  const [selectedPropertyType, setSelectedPropertyType] = useState("");
  const [amenities, setAmenities] = useState([]);
  const [otherAmenity, setOtherAmenity] = useState("");

  const handleAmenityChange = (event) => {
    const { name, checked } = event.target;
    if (checked) {
      setAmenities((prev) => [...prev, name]);
    } else {
      setAmenities((prev) => prev.filter((amenity) => amenity !== name));
    }
  };

  const [imageInputs, setImageInputs] = useState([{}]);
  const [documentInputs, setDocumentInputs] = useState([{}]);

  const addImageInput = () => {
    setImageInputs((prev) => [...prev, {}]);
  };

  const addDocumentInput = () => {
    setDocumentInputs((prev) => [...prev, {}]);
  };

  return (
    <Fragment>
  <Container>
      <h3 className="my-5 text text-center">Property Inventory Entry Form</h3>
   <Form className="bg-light p-5">
        {/* Property Details */}
        <h5>1. Property Details:</h5>
      <Form.Group className="my-4">
        <Form.Label>Property Type:</Form.Label>
        <div>
          {["Apartment", "Villa", "Plot", "Commercial Space", "Office", "Other (Specify)"].map((type) => (
            <Form.Check
              inline
              key={type}
              label={type}
              name="propertyType"
              type="radio"
              id={`propertyType-${type}`}
              onChange={() => setSelectedPropertyType(type)}
            />
          ))}
        </div>
        {selectedPropertyType === "Other (Specify)" && (
          <Form.Control
            type="text"
            placeholder="Specify Other Property Type"
            className="mt-2"
          />
        )}
      </Form.Group>

        <Form.Group className="my-5">
          <Form.Label>Property Location:</Form.Label>
          <Form.Control type="text" placeholder="Address Line 1" />
          <Form.Control type="text" placeholder="Address Line 2" className="mt-2" />
          <Row className="mt-2">
            <Col>
              <Form.Control type="text" placeholder="City" />
            </Col>
            <Col>
              <Form.Control type="text" placeholder="State" />
            </Col>
            <Col>
              <Form.Control type="text" placeholder="Pincode" />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group className="my-4">
          <Form.Label>Property Size:</Form.Label>
          <Row>
            <Col>
              <Form.Control type="text" placeholder="Built-Up Area (in sq. ft.)" />
            </Col>
            <Col>
              <Form.Control type="text" placeholder="Plot Area (if applicable, in sq. ft.)" />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group className="my-4">
          <Row>
            <Col>
              <Form.Label>Number of Bedrooms:</Form.Label>
              <Form.Control type="number" />
            </Col>
            <Col>
              <Form.Label>Number of Bathrooms:</Form.Label>
              <Form.Control type="number" />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group className="my-4">
          <Row>
            <Col>
              <Form.Label>Floor:</Form.Label>
              <Form.Control type="number" />
            </Col>
            <Col>
              <Form.Label>Total Floors:</Form.Label>
              <Form.Control type="number" />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group className="my-4">
          <Form.Label>Property Age:</Form.Label>
          <Form.Control type="number" placeholder="Years Since Construction" />
        </Form.Group>

        <Form.Group className="my-4">
          <Form.Label>Furnishing Status:</Form.Label>
          <div>
            {["Fully Furnished", "Semi-Furnished", "Unfurnished"].map((status) => (
              <Form.Check
                inline
                key={status}
                label={status}
                name="furnishingStatus"
                type="radio"
                id={`furnishingStatus-${status}`}
              />
            ))}
          </div>
        </Form.Group>

        <Form.Group className="my-4">
          <Form.Label>Parking Availability:</Form.Label>
          <div>
            <Form.Check inline label="Yes" name="parking" type="radio" id="parkingYes" />
            <Form.Check inline label="No" name="parking" type="radio" id="parkingNo" />
          </div>
        </Form.Group>

        <Form.Group className="my-4">
          <Form.Label>Number of Parking Spaces:</Form.Label>
          <Form.Control type="number" />
        </Form.Group>

        <Form.Group className="my-4">
          <Form.Label>Property Status:</Form.Label>
          <div>
            <Form.Check
              inline
              label="Ready to Move"
              name="propertyStatus"
              type="radio"
              id="readyToMove"
            />
            <Form.Check
              inline
              label="Under Construction"
              name="propertyStatus"
              type="radio"
              id="underConstruction"
            />
          </div>
        </Form.Group>

        <Form.Group className="my-4">
          <Form.Label>Expected Possession Date:</Form.Label>
          <Form.Control type="date" />
        </Form.Group>

        {/* Financial Details */}
        <h4 className="mt-5">2. Financial Details:</h4>
        <Form.Group className="my-4">
          <Form.Label>Asking Price:</Form.Label>
          <Form.Control type="number" placeholder="Sale Price (in INR)" />
        </Form.Group>

        <Form.Group className="my-4">
          <Form.Label>Rental Price:</Form.Label>
          <Form.Control type="number" placeholder="Rental Price (in INR per month)" />
        </Form.Group>

        <Form.Group className="my-4">
          <Form.Label>Maintenance Charges:</Form.Label>
          <Form.Control type="number" placeholder="Maintenance Charges (if applicable, in INR per month)" />
        </Form.Group>

        <Form.Group className="my-4">
          <Form.Label>Negotiable:</Form.Label>
          <div>
            <Form.Check inline label="Yes" name="negotiable" type="radio" id="negotiableYes" />
            <Form.Check inline label="No" name="negotiable" type="radio" id="negotiableNo" />
          </div>
        </Form.Group>

        {/* Property Features and Amenities */}
        <h4 className="mt-5">3. Property Features and Amenities:</h4>
        <Form.Group className="my-4">
          <Form.Label>Key Features:</Form.Label>
          <Form.Control type="text" placeholder="Facing, Water Supply, Power Backup, Security, Others" />
        </Form.Group>

        <Form.Group className="my-4">
      <Form.Label>Amenities:</Form.Label>
      {["Swimming Pool", "Gymnasium", "Clubhouse", "Children's Play Area", "Garden", "Lift", "Other (Specify)"].map((amenity) => (
        <Form.Check
          key={amenity}
          label={amenity}
          type="checkbox"
          name={amenity}
          onChange={handleAmenityChange}
        />
      ))}
      {amenities.includes("Other (Specify)") && (
        <Form.Control
          type="text"
          placeholder="Specify Other Amenity"
          className="mt-2"
          value={otherAmenity}
          onChange={(e) => setOtherAmenity(e.target.value)}
        />
      )}
    </Form.Group>

        {/* Property Images and Documents */}
        <h4 className="mt-5">4. Property Images and Documents:</h4>
        <Form.Group className="my-4">
        <Form.Label>Upload Property Images:</Form.Label>
        {imageInputs.map((input, index) => (
          <Form.Control
            key={index}
            type="file"
            multiple
            className="mb-2"
          />
        ))}
        <Button variant="secondary" onClick={addImageInput}>
          Add More Images
        </Button>
      </Form.Group>

      <Form.Group className="my-4">
        <Form.Label>Upload Property Documents:</Form.Label>
        {documentInputs.map((input, index) => (
          <Form.Control
            key={index}
            type="file"
            multiple
            className="mb-2"
          />
        ))}
        <Button variant="secondary" onClick={addDocumentInput}>
          Add More Documents
        </Button>
      </Form.Group>

        {/* Additional Notes */}
        <h4 className="mt-5">5. Additional Notes:</h4>
        <Form.Group className="my-4">
          <Form.Label>Agent Notes:</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Any additional information or special instructions" />
        </Form.Group>

        {/* Voice Input */}
        <h4 className="mt-4">6. Voice Input (Optional):</h4>
        <Form.Group className="my-4">
          <Form.Label>Voice Entry:</Form.Label>
          <Form.Control type="text" placeholder="Activate voice recognition to fill out form fields" />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-4">
          Submit
        </Button>
      </Form>
       
    </Container>
    </Fragment>
  
  );
};

export default AddProperties;
