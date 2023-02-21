import { useReducer } from "react";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { fetchAPI, submitAPI } from "../../utils";

function BookingForm() {
  const navigate = useNavigate();

  const initializeTimes = () => {
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  };

  const updateTimes = (state, action) => {
    return fetchAPI(new Date(action.payload));
  };

  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <Formik
      initialValues={{ date: "", time: "17:00", guests: 1, occasion: "Birthday" }}
      validate={(values) => {
        const errors = {};
        if (!values.date) {
          errors.date = "Date is required";
        }
        if (+values.guests < 1 || +values.guests > 10) {
          errors.guests = "Please enter value between 1 and 10";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        submitAPI(values);
        navigate("/booking-confirmed");
        setSubmitting(false);
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="res-date">Choose date</label>
            <input
              type="date"
              id="res-date"
              name="date"
              onChange={(e) => {
                dispatch({ payload: e.target.value });
                handleChange(e);
              }}
              onBlur={handleBlur}
              value={values.date}
            />
            {errors.date && touched.date && <div className="error">{errors.date}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" name="time" onChange={handleChange} onBlur={handleBlur} value={values.time}>
              {availableTimes.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="guests">Number of guests</label>
            <input
              type="number"
              placeholder="1"
              id="guests"
              name="guests"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.guests}
              formNoValidate
            />
            {errors.guests && touched.guests && <div className="error">{errors.guests}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" name="occasion" onChange={handleChange} onBlur={handleBlur} value={values.occasion}>
              <option>Birthday</option>
              <option>Anniversary</option>
            </select>
          </div>
          <Button type="submit" fullWidth disabled={isSubmitting} aria-label="On Click">
            Make Your reservation
          </Button>
        </form>
      )}
    </Formik>
  );
}

export default BookingForm;
