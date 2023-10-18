import React, {useEffect, useState} from "react";
import {userServices} from "../../services/userServices";
import Table from 'react-bootstrap/Table';
import './list.css'
import Button from 'react-bootstrap/Button';
import {useNavigate} from "react-router-dom";
import {ROUTE_PATH} from "../../constants/appConstants";
import Form from 'react-bootstrap/Form';

const ListComponent = () => {
    const navigate = useNavigate()
    const [listUser, setListUser] = useState<any[]>([]);
    const [listUserPass, setListUserPass] = useState<any[]>([]);
    useEffect(() => {
        userServices.getListUser().then((res: any) => {
            if (res) {
                setListUser(res)
                setListUserPass(res)
            } else {
                console.log('get list user failed')
            }
        })
    }, [])

    const handleSearch = (event: any) => {
        const val = event.target.value.trim().toLocaleUpperCase()
        setListUserPass([])
        if(val.trim() === ''){
            setListUserPass(listUser)
        }else{
            listUser.forEach((item: any, index) => {
                for (const itemKey in item) {
                    console.log(                    itemKey
                    )
                    if(item[itemKey] === 'roles'){
                        console.log('123')
                        item[itemKey].includes(val)
                        setListUserPass((prev)=>([...prev, item]));
                        break;
                    }
                    if(typeof item[itemKey] === 'string' && itemKey !=='password' && itemKey !== 'abouts'){
                        if (item[itemKey].toLocaleUpperCase().includes(val)) {
                            setListUserPass((prev)=>([...prev, item]));
                            break;
                        }
                    }

                }

            })
        }
    }

    const ListUser = (data: any) => {

        const CheckButton = (role: string, key: any) => {
            switch (role) {
                case "admin":
                    return <Button variant="danger" key={key}>{role}</Button>
                case "staff":
                    return <Button variant="success" key={key}>{role}</Button>
                case "manager":
                    return <Button variant="warning" key={key}>{role}</Button>
                default:
                    return;
            }
        }

        const handleRedirectDetail = (id: number) => {
            navigate("/" + ROUTE_PATH.home + "/" + ROUTE_PATH.detail + `/${id}`)
        }


        return (
            <Table striped bordered hover>
                <thead>
                <tr className='header-table-list'>
                    <th>#</th>
                    <th>Name</th>
                    <th>User name</th>
                    <th>Email</th>
                    <th>roles</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Website</th>
                    <th>Company</th>
                </tr>
                </thead>
                <tbody>
                {
                    data?.data.map((user: any, key: any) => {
                        return (
                            <tr key={key} onClick={() => {
                                handleRedirectDetail(user.id)
                            }} className='list-user-name'>
                                <td>{user.id}</td>
                                <td className='col-user-name'>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                    <div className='d-flex flex-wrap' style={{gap: '12px'}}>
                                        {user.roles?.map((role: string, key: any) => {
                                            return CheckButton(role, key)
                                        })}
                                    </div>
                                </td>
                                <td>
                                    <p>street: {user.address?.street}</p>
                                    <p>suite: {user.address?.suite}</p>
                                    <p>city: {user.address?.city}</p>
                                    <p>zipcode: {user.address?.zipcode}</p>
                                </td>
                                <td>{user.phone}</td>
                                <td>{user.website}</td>
                                <td>{user.company?.name}</td>
                            </tr>
                        )
                    })
                }

                </tbody>
            </Table>
        )
    }

    return (
        <div className='pt-3'>
            <div className='w-25 pb-3'>
                <Form.Control
                    type="text"
                    placeholder='Search somethings...'
                    onChange={handleSearch}
                />
            </div>
            <ListUser data={listUserPass}/>
        </div>
    )
}

export default ListComponent