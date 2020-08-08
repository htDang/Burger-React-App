import React, { Component } from 'react';
import Modal from '../../comoponents/UI/Modal/Modal';
import Aux from '../Aux';

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = { error: null };
    }

    errorConfirmHandler = () => {
      this.setState({ error: null });
    };

    componentWillMount() {
      this.reqInterceptor = axios.interceptors.request.use((req) => {
        // console.log('interceptors req: ', req);
        this.setState({ error: null });
        return req;
      });
      this.resInterceptor = axios.interceptors.response.use(
        (res) => res,
        (error) => {
          // console.log('interceptors res: ', error);
          this.setState({ error: error });
        }
      );
    }
    
    render() {
      return (
        <Aux>
          <Modal show={this.state.error} modalClosed={this.errorConfirmHandler}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      );
    }

    // componentDidMount is actually called after child components have been rendered
    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptor);
    }
  };
};

export default withErrorHandler;
