import React from 'react';
import { ListGroup, ListGroupItem, Row, Col, FormInput, Card } from 'shards-react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../redux/auth/auth';
import { useHistory } from "react-router-dom";
const SignIn = () => {
  const dispatch = useDispatch();
  const history = useHistory()
  const loading = useSelector(state => state.auth.loading)
  const validationSchema = yup.object({
    name: yup
      .string()
      .trim() 
      //   .email('Email không hợp lệ')
      .required('Nhập tài khoản'),
    password: yup.string().required('Bạn chưa nhập mật khẩu')
  });

  const { values, errors, handleChange, handleBlur, handleSubmit, touched } = useFormik({
    validationSchema: validationSchema,
    initialValues: {
      name: '',
      password: ''
    },
    onSubmit: async values => {
      const res = await dispatch(
        signIn({
          name: values.name,
          password: values.password
        })
      );

      localStorage.setItem('adminUser', res.meta.arg.name);
      if (res.payload.data.message === 'Login Succesfully') {
        // window.location.replace(routeConstants.DASHBOARD);
        history.push("/blog-overview" )
        return;
      } else {
        alert(res.payload.data.message)
      }
    }
  });

  return (
    <div className="loginform center-block w-2/6" style={{ top: '40%' }}>
      <h1 className="text-center heading">Đăng nhập </h1>
      <Card small>
        <ListGroup flush>
          <ListGroupItem className="p-3">
            <Row>
              <Col>
                <form onSubmit={handleSubmit} autoComplete="off">
                  <Row form>
                    <Col className="form-group">
                      <label htmlFor="feEmailAddress">Tên đăng nhập</label>
                      <FormInput
                        id="name"
                        name="name"
                        placeholder="Tên đăng nhập"
                        // values={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        status={touched.email && errors.email ? 'error' : undefined}
                      />
                    </Col>
                  </Row>
                  <Row>
                  <Col className="form-group">
                      <label htmlFor="fePassword">Mật khẩu</label>
                      <FormInput
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Mật khẩu"
                        // values={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        status={touched.password && errors.password ? 'error' : undefined}
                      />
                     
                    </Col>
                  </Row>
                  <div className="form-input-box text-right">
                    <button
                        type="submit"
                        loading={loading}
                        icon={true}
                        onClick={handleSubmit}
                        >
                        Đăng nhập
                    </button>
                  </div>
                </form>
              </Col>
            </Row>
          </ListGroupItem>
        </ListGroup>
      </Card>
    </div>
  );
};

export default SignIn;
