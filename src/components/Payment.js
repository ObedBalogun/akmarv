import React from 'react';

const Payment = () => {
    const query = new URLSearchParams(this.props.location.search);
    const ref = query.get('txref')
    console.log(ref)


    return (
        <>

        </>
    );

}

export default Payment;