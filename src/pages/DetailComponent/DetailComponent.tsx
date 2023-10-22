import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import './detail.css';
import {DetailUser} from "../../models/userModel";
import {getDetailUserById} from "../../services/userServices";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import {useNavigate} from "react-router-dom";
import {ROUTE_PATH} from "../../constants/appConstants";

const DetailComponent = () => {
    let {id} = useParams();
    const navigate = useNavigate();
    const [detailUser, setDetailUser] = useState<DetailUser | undefined>();

    useEffect(() => {
        if (id) {
            getDetailUserById(parseInt(id)).then((res: any) => {
                    setDetailUser(res?.data)
                }
            )
        }
    }, [])

    return (
        <div className='w-100 pt-3 ps-3 pe-3' style={{height: 'calc(100vh - 116px)'}}>
            <div><Button variant="primary" onClick={()=>{navigate("/" + ROUTE_PATH.home)}}>Back</Button></div>
            <div className='d-flex align-items-center justify-content-center w-100 h-100'>
                <div className="flip-card" tabIndex={0}>
                    <div className="flip-card-inner" style={{borderRadius: '0.375rem'}}>
                        <Card style={{width: '18rem'}} className="flip-card-front">
                            <Card.Img variant="top"
                                      src="https://i.bloganchoi.com/bloganchoi.com/wp-content/uploads/2022/10/tran-phi-vu.jpg?fit=690%2C20000&quality=95&ssl=1"/>
                            <Card.Body>
                                <Card.Title style={{color: '#ffffff'}}>{detailUser?.name}</Card.Title>
                                <Card.Text style={{color: '#ffffff'}}>
                                    {detailUser?.company?.bs}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{width: '18rem'}} className="flip-card-back">
                            <ListGroup variant="flush" className='w-100'>
                                <ListGroup.Item className='d-flex'><strong>Name: {'\u00A0'}</strong>{detailUser?.name}
                                </ListGroup.Item>
                                <ListGroup.Item className='d-flex'><strong>User
                                    name: {'\u00A0'}</strong>{detailUser?.username}</ListGroup.Item>
                                <ListGroup.Item className='d-flex'><strong>Phone: {'\u00A0'}</strong>{detailUser?.phone}
                                </ListGroup.Item>
                                <ListGroup.Item className='d-flex'><strong>Email: {'\u00A0'}</strong>{detailUser?.email}
                                </ListGroup.Item>
                                <ListGroup.Item
                                    className='d-flex'><strong>Website: {'\u00A0'}</strong>{detailUser?.website}
                                </ListGroup.Item>
                                <ListGroup.Item
                                    className='d-flex'><strong>Address: </strong>{detailUser?.address?.suite}, {detailUser?.address?.street}, {detailUser?.address?.city}
                                </ListGroup.Item>
                                <ListGroup.Item className='d-flex'><strong>Company: {'\u00A0'}</strong>
                                    {detailUser?.company?.name}
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailComponent