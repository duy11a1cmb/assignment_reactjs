import React, {useEffect, useState} from "react";
import {userServices} from "../../services/userServices";
import Table from 'react-bootstrap/Table';
import './list.css'
import Button from 'react-bootstrap/Button';
import {useNavigate} from "react-router-dom";
import {ROUTE_PATH} from "../../constants/appConstants";
import Form from 'react-bootstrap/Form';

interface Filter {
    query: string,
    role: string
}

const ListComponent = () => {
    const navigate = useNavigate()
    const [listUser, setListUser] = useState<any[]>([]);
    const [listUserPass, setListUserPass] = useState<any[]>([]);
    const [listSearchQuery, setListSearchQuery] = useState<any[]>([])
    const [listSearchRole, setListSearchRole] = useState<any[]>([])
    const [filter, setFilter] = useState<Filter>({
        query: '',
        role: ''
    })

    useEffect(() => {
        userServices.getListUser().then((res: any) => {
            if (res) {
                setListUser(res)
                setListSearchQuery(res)

            } else {
            }
        })
    }, [])

    const onChangeQuery = (event: any) => {
        const val = event.target.value.trim().toLocaleUpperCase()
        setFilter({...filter, query: val})
        handleSearch(val)

    }

    const handleSearch = (val:string) => {
        setListSearchQuery([])
        if (val.trim() === '') {
            setListSearchQuery(listUser)
        } else {
            listUser.forEach((item: any, index) => {
                for (const itemKey in item) {
                    if (typeof item[itemKey] === 'string' && itemKey !== 'password' && itemKey !== 'abouts') {
                        if (item[itemKey].toLocaleUpperCase().includes(val)) {
                            setListSearchQuery((prev: any) => ([...prev, item]));
                            break;
                        }
                    }

                }
            })
        }
    }


    const handleSelectRole = (val:string) => {
        setListSearchRole([])

        // listUser.forEach((item: any) => {
        //     if (item.roles.includes(filter.role)) {
        //         setListSearchRole((prev: any) => ([...prev, item]));
        //     }
        // })
    }

    const compareValSearch = () => {
        setListUserPass([])
        const isSameUser = (a: any, b: any) => a.id === b.id && a.id === b.id;
        const onlyInLeft = (left: any[], right: any[], compareFunction: any) =>
            left.filter(leftValue =>
                right.some(rightValue =>
                    compareFunction(leftValue, rightValue)));
        const onlyInA = onlyInLeft(listSearchQuery, listSearchRole, isSameUser);
        const onlyInB = onlyInLeft(listSearchRole, listSearchQuery, isSameUser);

        const result = [...onlyInA, ...onlyInB];
        setListUserPass(result)
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
            navigate("/" + ROUTE_PATH.detail + `/${id}`)
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

    const onChangeSelectRoles = (event: any) => {
        setFilter({...filter, role: event.target.value})
        handleSelectRole(event.target.value)
    }

    useEffect(() => {
        handleSelectRole(filter.role)
        handleSearch(filter.query)
        compareValSearch()

    }, [filter])

    return (
        <div className='pt-3'>
            <div className='w-100 pb-3 d-flex justify-content-between'>
                <Form.Control
                    className='w-50'
                    type="text"
                    placeholder='Search somethings without roles...'
                    onChange={onChangeQuery}
                />
                <Form.Select aria-label="Default select example" className='w-25' onChange={onChangeSelectRoles}
                             value={filter.role}>
                    <option value="all">All Roles</option>
                    <option value="admin">Admin</option>
                    <option value="manager">Manager</option>
                    <option value="staff">Staff</option>
                </Form.Select>
            </div>
            <ListUser data={listSearchQuery}/>
        </div>
    )
}

export default ListComponent