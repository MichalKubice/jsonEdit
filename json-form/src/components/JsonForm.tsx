import React, {useState, useEffect} from "react";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {iOptions} from "../types/options";
import {getData, editData, downloadData} from "../utils";

const JsonForm = () => {
  const [values, setValues] = useState<iOptions>({
    dataLayer: "",
    primaryColor: "",
    borderRadius: 0,
    dismissable: true,
    dismissType: "cross",
    expiration: 0,
    closeType: "cross",
  });

  useEffect(() => {
    getData().then((res) => {
      setValues(res);
    });
  }, []);

  const submitHandler = () => {
    editData(values);
  };

  const downloadHandler = () => {
    downloadData();
  };

  return (
    <Row>
      <Form>
        <Form.Group className='mb-3' controlId='dataLayer'>
          <Form.Label>Data Layer</Form.Label>
          <Form.Control
            type='text'
            value={values.dataLayer}
            onChange={(e) => setValues({...values, dataLayer: e.target.value})}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='primaryColor'>
          <Form.Label>Primary color</Form.Label>
          <Form.Control
            type='color'
            value={values.primaryColor}
            onChange={(e) =>
              setValues({...values, primaryColor: e.target.value})
            }
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='borderRadius'>
          <Form.Label>Border Radius</Form.Label>
          <Form.Control
            type='number'
            value={values.borderRadius}
            onChange={(e) =>
              setValues({...values, borderRadius: +e.target.value})
            }
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='dismissable'>
          <Form.Check
            type='switch'
            label='Dismissable'
            checked={values.dismissable}
            onChange={(e) =>
              setValues({...values, dismissable: e.target.checked})
            }
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='dismissType'>
          <Form.Label>Dismiss Type</Form.Label>
          <Form.Select
            value={values.dismissType}
            onChange={(e: any) => {
              setValues({...values, dismissType: e.target.value});
            }}
          >
            <option value='cross'>cross</option>
            <option value='cross-faint'>cross-faint</option>
            <option value='text'>text</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className='mb-3' controlId='expiration'>
          <Form.Label>Expiration</Form.Label>
          <Form.Control
            type='number'
            value={values.expiration}
            onChange={(e) =>
              setValues({...values, expiration: +e.target.value})
            }
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='closeType'>
          <Form.Label>Dismiss Type</Form.Label>
          <Form.Select
            value={values.closeType}
            onChange={(e: any) =>
              setValues({...values, closeType: e.target.value})
            }
          >
            <option value=''>Select</option>
            <option value='cross'>cross</option>
            <option value='tab'>tab</option>
          </Form.Select>
        </Form.Group>
        <div className='d-grid'>
          <Button
            className='mb-3'
            variant='primary'
            size='lg'
            onClick={submitHandler}
          >
            Edit JSON
          </Button>
          <Button variant='secondary' size='lg' onClick={downloadHandler}>
            Download JSON
          </Button>
        </div>
      </Form>
    </Row>
  );
};

export default JsonForm;
