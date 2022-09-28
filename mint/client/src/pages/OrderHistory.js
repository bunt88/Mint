import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

export default function OrderHistory() {
    return (
        <div>
            <Row className="orderHdr text-center">
                <h1>Order History</h1>
            </Row>

            <Container>
                <Table className='table text-center' bordered>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>DATE ORDERED</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>id</td>
                            <td>name</td>
                            <td>date</td>
                        </tr>
                        <tr>
                            <td>id2</td>
                            <td>name2</td>
                            <td>date2</td>
                        </tr>
                        <tr>
                            <td>id3</td>
                            <td>name3</td>
                            <td>date3</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </div>
    );
}