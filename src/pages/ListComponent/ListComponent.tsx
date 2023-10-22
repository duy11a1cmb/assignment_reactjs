import React, {useEffect, useState} from "react";
import {getListUser} from "../../services/userServices";

import "./list.css";
import Form from "react-bootstrap/Form";
import {DetailUser, FilterTable} from "../../models/userModel";
import {useDispatch, useSelector} from "react-redux";
import {
    setCurrentFilterPages,
    setNumberPerPageslFilterPages,
    setQueryFilterPages,
    setSortFilterPages,
    setTotalFilterPages,
} from "../../redux/slices/filterSlices";
import Pagination from "react-bootstrap/Pagination";
import ListUser from "./ListUser";

const ListComponent = () => {
    const dispatch = useDispatch();
    const filter: FilterTable = useSelector((state: any) => state?.filterPages);
    const [listUser, setListUser] = useState<any[]>([]);
    const [listUserPass, setListUserPass] = useState<DetailUser[]>([]);

    const handleGetListUser = () => {
        getListUser()
            .then((res: any) => {
                if (res.data.length > 0) {
                    let temp = handleSearch(res.data);
                    let totalPages = Math.ceil(temp.length / filter.numberPerPage);
                    dispatch(setTotalFilterPages(totalPages));
                    if (totalPages < filter.currentPage) {
                        dispatch(setCurrentFilterPages(1));
                    }
                    if (temp.length <= 1) {
                        dispatch(setSortFilterPages("none"));
                    }
                    temp = temp.slice(
                        (filter.currentPage - 1) * filter.numberPerPage,
                        filter.numberPerPage * filter.currentPage
                    );
                    return temp;
                }
                return [];
            })
            .then((res: DetailUser[]) => {
                setListUser(res);
                setListUserPass(res);
            });
    };

    const onChangeQuery = (event: any) => {
        const val = event.target.value.trim().toLocaleUpperCase();
        dispatch(setQueryFilterPages(val));
    };

    const handleSearch = (data?: DetailUser[]): DetailUser[] => {
        let temp: DetailUser[] = [];
        let dataFilter = data ? data : listUser;
        dataFilter.forEach((item: any) => {
            for (const itemKey in item) {
                if (typeof item[itemKey] === "string") {
                    if (item[itemKey].toLocaleUpperCase().includes(filter.query)) {
                        temp.push(item);
                        break;
                    }
                }
            }
        });
        if (temp.length > 1) {
            handleSort(temp);
        }
        !data && setListUserPass(temp);
        return temp;
    };

    const handleSort = (data: DetailUser[]) => {
        switch (filter.sort) {
            case "none":
                break;
            case "asc":
                data.sort((a: DetailUser, b: DetailUser) => {
                    if (a.name > b.name) {
                        return 1;
                    } else {
                        return -1;
                    }
                });
                break;
            case "desc":
                data.sort((a: DetailUser, b: DetailUser) => {
                    if (a.name < b.name) {
                        return 1;
                    } else {
                        return -1;
                    }
                });
                break;
            default:
                break;
        }
    };

    const onChangeSelectSort = (event: any) => {
        const val = event.target.value.trim();
        dispatch(setSortFilterPages(val));
    };
    const onChangeNumberPerPage = (event: any) => {
        const val = parseInt(event.target.value);
        dispatch(setNumberPerPageslFilterPages(val));
    };

    useEffect(() => {
        handleGetListUser();
    }, [filter]);

    const handleChoicePage = (option: string, page?: number) => {
        switch (option) {
            case "choice":
                dispatch(setCurrentFilterPages(page));
                break;
            case "prev":
                dispatch(setCurrentFilterPages(filter.currentPage - 1));
                break;
            case "next":
                dispatch(setCurrentFilterPages(filter.currentPage + 1));
                break;
            case "first":
                dispatch(setCurrentFilterPages(1));
                break;
            case "last":
                dispatch(setCurrentFilterPages(filter.totalPages));
                break;
            default:
                break;
        }
    };

    return (
        <div className="pt-3 w-100 ps-3 pe-3">
            <div className="w-100 pb-3 d-flex justify-content-end container-sorting">
                <Form.Control
                    className="input-search-list"
                    type="text"
                    placeholder="Search somethings..."
                    onChange={onChangeQuery}
                />
                <div className="d-flex container-select-sort" style={{gap: "15px"}}>
                    <label
                        className="d-flex align-items-center"
                        style={{fontWeight: "bold"}}
                    >
                        Order by
                    </label>
                    <Form.Select
                        aria-label="Default select example"
                        className="select-sort-list"
                        onChange={onChangeSelectSort}
                        value={filter.sort}
                    >
                        <option value="none" disabled={listUserPass.length <= 1}>
                            Sorting by name
                        </option>
                        <option value="asc" disabled={listUserPass.length <= 1}>
                            Asc
                        </option>
                        <option value="desc" disabled={listUserPass.length <= 1}>
                            Desc
                        </option>
                    </Form.Select>
                </div>
            </div>
            <ListUser data={listUserPass}/>
            <div className="d-flex justify-content-end pt-3" style={{gap: "12px"}}>
                <Form.Select
                    size="sm"
                    aria-label="Default select example"
                    onChange={onChangeNumberPerPage}
                    value={filter.numberPerPage}
                    style={{height: "38px", width: "65px"}}
                >
                    <option value={1}>1</option>
                    <option value={3}>3</option>
                    <option value={5}>5</option>
                    <option value={7}>7</option>
                    <option value={10}>10</option>
                </Form.Select>

                <Pagination>
                    {/* <Pagination.First
            disabled={filter.currentPage === 1}
            onClick={() => handleChoicePage("first")}
          /> */}
                    <Pagination.Prev
                        disabled={filter.currentPage === 1}
                        onClick={() => handleChoicePage("prev")}
                    />

                    <Pagination.Item
                        active={filter.currentPage === 1}
                        onClick={() => handleChoicePage("choice", 1)}
                    >
                        1
                    </Pagination.Item>

                    {filter.totalPages > 4 ? (
                        <>
                            {(filter.currentPage > 2 || filter.currentPage === 1) && (
                                <Pagination.Ellipsis disabled/>
                            )}
                            <Pagination.Item
                                active={
                                    filter.currentPage !== 1 &&
                                    filter.currentPage !== filter.totalPages
                                }
                                onClick={() =>
                                    handleChoicePage("choice", Math.round(filter.totalPages / 2))
                                }
                            >
                                {filter.currentPage !== 1 &&
                                filter.currentPage !== filter.totalPages
                                    ? filter.currentPage
                                    : Math.round(filter.totalPages / 2)}
                            </Pagination.Item>
                            {(filter.currentPage < filter.totalPages - 1 ||
                                filter.currentPage === filter.totalPages) && (
                                <Pagination.Ellipsis disabled/>
                            )}
                        </>
                    ) : (
                        <>
                            {filter.totalPages === 4 && <>
                              <Pagination.Item
                                active={filter.currentPage === 2}
                                onClick={() => handleChoicePage("choice", 2)}
                              >
                                2
                              </Pagination.Item> <Pagination.Item
                              active={filter.currentPage === 3}
                              onClick={() => handleChoicePage("choice", 3)}
                            >
                              3
                            </Pagination.Item>
                            </>
                            }
                        </>
                    )
                    }

                    {filter.totalPages > 1 && (
                        <Pagination.Item
                            active={filter.currentPage === filter.totalPages}
                            onClick={() => handleChoicePage("choice", filter.totalPages)}
                        >
                            {filter.totalPages}
                        </Pagination.Item>
                    )}

                    <Pagination.Next
                        disabled={filter.currentPage === filter.totalPages}
                        onClick={() => handleChoicePage("next")}
                    />
                    {/* <Pagination.Last
            disabled={filter.currentPage === filter.totalPages}
            onClick={() => handleChoicePage("last")}
          /> */}
                </Pagination>
            </div>
        </div>
    );
};

export default ListComponent;
