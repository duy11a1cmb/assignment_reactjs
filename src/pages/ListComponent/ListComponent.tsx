import React, {useEffect, useState} from "react";
import {getListUser} from "../../services/userServices";
import Table from 'react-bootstrap/Table';
import './list.css'
import Button from 'react-bootstrap/Button';
import {useNavigate} from "react-router-dom";
import {ROUTE_PATH} from "../../constants/appConstants";
import Form from 'react-bootstrap/Form';
import {DetailUser, FilterTable} from "../../models/userModel";
import {useDispatch, useSelector} from "react-redux";
import {setQueryFilterPages, setSortFilterPages} from "../../redux/slices/filterSlices";


interface IMyProps {
    data: DetailUser[]
}

const ListComponent = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const filter: FilterTable = useSelector((state: any) => state?.filterPages)
    const [listUser, setListUser] = useState<any[]>([]);
    const [listUserPass, setListUserPass] = useState<DetailUser[]>([]);
    const [listSearchRole, setListSearchRole] = useState<any[]>([])

    useEffect(() => {
        getListUser().then((res: any) => {
            if (res) {
                setListUser(res.data)
                setListUserPass(res.data)
            } else {
            }
        })
    }, [])

    const onChangeQuery = (event: any) => {
        const val = event.target.value.trim().toLocaleUpperCase()
        dispatch(setQueryFilterPages(val))
    }

    const handleSearch = () => {
        let temp: DetailUser[] = []
        listUser.forEach((item: any) => {
            for (const itemKey in item) {
                if (typeof item[itemKey] === 'string') {
                    if (item[itemKey].toLocaleUpperCase().includes(filter.query)) {
                        temp.push(item)
                        break;
                    }
                }
            }
        })
        if (temp.length > 1) {
            handleSort(temp)
        }
        setListUserPass(temp);
    }

    const ListUser = (props: IMyProps) => {
        let {data} = {...props}
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
            <div className='container-table'>
                <Table striped bordered hover>
                    <thead>
                    <tr className='header-table-list'>
                        <th>#</th>
                        <th>Name</th>
                        <th>User name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Website</th>
                        <th>Company</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        data?.map((user: any, key: any) => {
                            return (
                                <tr key={key} className='list-user-name'>
                                    <td>{user.id}</td>
                                    <td className='col-user-name' onClick={() => {
                                        handleRedirectDetail(user.id)
                                    }}>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
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
            </div>

        )
    }

    const handleSort = (data: DetailUser[]) => {
        switch (filter.sort) {
            case 'none':
                break
            case 'asc':
                data.sort((a: DetailUser, b: DetailUser) => {
                    if (a.name > b.name) {
                        return 1
                    } else {
                        return -1
                    }
                })
                break
            case 'desc':
                data.sort((a: DetailUser, b: DetailUser) => {
                    if (a.name < b.name) {
                        return 1
                    } else {
                        return -1
                    }
                })
                break
            default:
                break
        }
    }

    const onChangeSelectSort = (event: any) => {
        const val = event.target.value.trim()
        dispatch(setSortFilterPages(val))
    }

    useEffect(() => {
        handleSearch()
    }, [filter])

    return (
        <div className='pt-3'>
            <div className='w-100 pb-3 d-flex justify-content-between'>
                <Form.Control
                    className='w-50'
                    type="text"
                    placeholder='Search somethings...'
                    onChange={onChangeQuery}
                />
                <Form.Select aria-label="Default select example" className='w-25' onChange={onChangeSelectSort}
                             value={filter.sort}>
                    <option value="none">Sorting</option>
                    <option value="asc">Asc</option>
                    <option value="desc">Desc</option>
                </Form.Select>
            </div>
            <ListUser data={listUserPass}/>
        </div>
    )
}

export default ListComponent