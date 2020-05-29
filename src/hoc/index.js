import React, { Component } from "react";
import Spinner from "../components/spinner";
import ErrorComponent from "../components/error-component";
import { SwapiConsumer } from "../context";

const withData = (View, propsFunc) => {
    return class extends Component {
        state = {
            data: [],
            loading: false,
            error: false,
        };
        componentDidMount() {
            propsFunc().then(this.onDataLoaded).catch(this.onError);
        }

        onDataLoaded = (data) => {
            this.setState({
                data,
                loading: false,
            });
        };
        onError = () => {
            this.setState({
                error: true,
                loading: false,
            });
        };
        render() {
            const { data, loading, error } = this.state;

            if (loading) {
                return <Spinner />;
            }
            if (error) {
                return <ErrorComponent />;
            }

            return <View {...this.props} data={data} />;
        }
    };
};

const withChildFunction = (Wrapper, wrapFunc) => {
    return (props) => <Wrapper {...props}>{wrapFunc}</Wrapper>;
};

const withConnect = (Wrapper) => {
    return (props) => {
        return (
            <SwapiConsumer>
                {(value) => {
                    return <Wrapper {...props} swapiService={value} />;
                }}
            </SwapiConsumer>
        );
    };
};

export { withData, withChildFunction, withConnect };
