import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faKey, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import {faLinkedinIn,faFacebook,faTwitter,} from "@fortawesome/free-brands-svg-icons";
import {faAngleRight,faCartShopping,faHeart,faUser,} from "@fortawesome/free-solid-svg-icons";
// CSS Imports
import '../../assets/Phoenix/css/simplebar.min.css';
import '../../assets/Phoenix/css/theme-rtl.min.css';
import '../../assets/Phoenix/css/theme.min.css';
import '../../assets/Phoenix/css/user-rtl.min.css';
import '../../assets/Phoenix/css/user.min.css';
import '../../assets/Phoenix/css/leaflet.css';
import '../../assets/Phoenix/css/MarkerCluster.css';
import '../../assets/Phoenix/css/MarkerCluster.Default.css';

// JavaScript Imports
import '../../assets/Phoenix/js/popper.min.js';
import '../../assets/Phoenix/js/bootstrap.min.js';
import '../../assets/Phoenix/js/all.min.js';
import '../../assets/Phoenix/js/lodash.min.js';
import '../../assets/Phoenix/js/list.min.js';
import '../../assets/Phoenix/js/feather.min.js';
import '../../assets/Phoenix/js/dayjs.min.js';
import '../../assets/Phoenix/js/echarts.min.js';
import '../../assets/Phoenix/js/leaflet.js';
import '../../assets/Phoenix/js/leaflet.markercluster.js';
import '../../assets/Phoenix/js/leaflet-tilelayer-colorfilter.min.js';

import NavbarVertical from '../../components/Layout/LayoutAdmin';


const ProfilePage: React.FC = () => {
    return (
        <NavbarVertical>
        <section className="pt-5 pb-9 profile-page"  >
            <div className="container-small">
                <nav className="mb-3" aria-label="breadcrumb">
                    <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item">
                            <a href="#!">Page 1</a>
                        </li>
                        <li className="breadcrumb-item">
                            <a href="#!">Page 2</a>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                            Default
                        </li>
                    </ol>
                </nav>
                <div className="row align-items-center justify-content-between g-3 mb-4">
                    <div className="col-auto">
                        <h2 className="mb-0">Profile</h2>
                    </div>
                    <div className="col-auto">
                        <div className="row g-2 g-sm-3">
                            <div className="col-auto">
                                <button className="btn btn-phoenix-danger">
                                    <FontAwesomeIcon icon={faTrashCan} className="me-2" />
                                    Delete customer
                                </button>
                            </div>
                            <div className="col-auto">
                                <button className="btn btn-phoenix-secondary">
                                    <FontAwesomeIcon icon={faKey} className="me-2" />
                                    Reset password
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row g-3 mb-6">
                    <div className="col-12 col-lg-8">
                        <div className="card h-100">
                            <div className="card-body">
                                <div className="border-bottom border-dashed pb-4">
                                    <div className="row align-items-center g-3 g-sm-5 text-center text-sm-start">
                                        <div className="col-12 col-sm-auto">
                                            <input className="d-none" id="avatarFile" type="file" />
                                            <label
                                                className="cursor-pointer avatar avatar-5xl"
                                                htmlFor="avatarFile"
                                            >
                                                <img
                                                    className="rounded-circle"
                                                    src="../../../assets/img/team/15.webp"
                                                    alt=""
                                                />
                                            </label>
                                        </div>
                                        <div className="col-12 col-sm-auto flex-1">
                                            <h3>Ansolo Lazinatov</h3>
                                            <p className="text-body-secondary">Joined 3 months ago</p>
                                            <div>
                                                <a className="me-2" href="#!">
                                                    <FontAwesomeIcon
                                                        icon={faLinkedinIn}
                                                        className="text-body-quaternary text-opacity-75 text-primary-hover"
                                                    />
                                                </a>
                                                <a className="me-2" href="#!">
                                                    <FontAwesomeIcon
                                                        icon={faFacebook}
                                                        className="text-body-quaternary text-opacity-75 text-primary-hover"
                                                    />
                                                </a>
                                                <a href="#!">
                                                    <FontAwesomeIcon
                                                        icon={faTwitter}
                                                        className="text-body-quaternary text-opacity-75 text-primary-hover"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex flex-between-center pt-4">
                                    <div>
                                        <h6 className="mb-2 text-body-secondary">Total Spent</h6>
                                        <h4 className="fs-7 text-body-highlight mb-0">$894</h4>
                                    </div>
                                    <div className="text-end">
                                        <h6 className="mb-2 text-body-secondary">Last Order</h6>
                                        <h4 className="fs-7 text-body-highlight mb-0">
                                            1 week ago
                                        </h4>
                                    </div>
                                    <div className="text-end">
                                        <h6 className="mb-2 text-body-secondary">Total Orders</h6>
                                        <h4 className="fs-7 text-body-highlight mb-0">97</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <div className="border-bottom border-dashed">
                                    <h4 className="mb-3">
                                        Default Address
                                        <button className="btn btn-link p-0" type="button">
                                            <FontAwesomeIcon
                                                icon={faPenToSquare}
                                                className="fs-9 ms-3 text-body-quaternary"
                                            />
                                        </button>
                                    </h4>
                                </div>
                                <div className="pt-4 mb-7 mb-lg-4 mb-xl-7">
                                    <div className="row justify-content-between">
                                        <div className="col-auto">
                                            <h5 className="text-body-highlight">Address</h5>
                                        </div>
                                        <div className="col-auto">
                                            <p className="text-body-secondary">
                                                Vancouver, British Columbia
                                                <br />
                                                Canada
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-top border-dashed pt-4">
                                    <div className="row flex-between-center mb-2">
                                        <div className="col-auto">
                                            <h5 className="text-body-highlight mb-0">Email</h5>
                                        </div>
                                        <div className="col-auto">
                                            <a className="lh-1" href="mailto:shatinon@jeemail.com">
                                                shatinon@jeemail.com
                                            </a>
                                        </div>
                                    </div>
                                    <div className="row flex-between-center">
                                        <div className="col-auto">
                                            <h5 className="text-body-highlight mb-0">Phone</h5>
                                        </div>
                                        <div className="col-auto">
                                            <a href="tel:+1234567890">+1234567890</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="scrollbar">
                        <ul
                            className="nav nav-underline fs-9 flex-nowrap mb-3 pb-1"
                            id="myTab"
                            role="tablist"
                        >
                            <li className="nav-item me-3" role="presentation">
                                <a
                                    className="nav-link text-nowrap active"
                                    id="orders-tab"
                                    data-bs-toggle="tab"
                                    href="#tab-orders"
                                    role="tab"
                                    aria-controls="tab-orders"
                                    aria-selected="true"
                                >
                                    <FontAwesomeIcon icon={faCartShopping} className="me-2" />
                                    Orders{" "}
                                    <span className="text-body-tertiary fw-normal"> (35)</span>
                                </a>
                            </li>
                            <li className="nav-item me-3" role="presentation">
                                <a
                                    className="nav-link text-nowrap"
                                    id="wishlist-tab"
                                    data-bs-toggle="tab"
                                    href="#tab-wishlist"
                                    role="tab"
                                    aria-controls="tab-wishlist"
                                    aria-selected="false"
                                    tabIndex={-1}
                                >
                                    <FontAwesomeIcon icon={faHeart} className="me-2" />
                                    Wishlist
                                </a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a
                                    className="nav-link text-nowrap"
                                    id="personal-info-tab"
                                    data-bs-toggle="tab"
                                    href="#tab-personal-info"
                                    role="tab"
                                    aria-controls="tab-personal-info"
                                    aria-selected="false"
                                    tabIndex={-1}
                                >
                                    <FontAwesomeIcon icon={faUser} className="me-2" />
                                    Personal info
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="tab-content" id="profileTabContent">
                    <div
                        className="tab-pane fade show active"
                        id="tab-orders"
                        role="tabpanel"
                        aria-labelledby="orders-tab"
                    >
                        <div
                            className="border-top border-bottom border-translucent"
                            id="profileOrdersTable"
                            data-list={{
                                valueNames: ["order", "status", "delivery", "date", "total"],
                                page: 6,
                                pagination: true,
                            }}
                        >
                            <div className="table-responsive scrollbar">
                                <table className="table fs-9 mb-0">
                                    <thead>
                                        <tr>
                                            <th
                                                className="sort white-space-nowrap align-middle pe-3 ps-0"
                                                scope="col"
                                                data-sort="order"
                                                style={{ width: "15%", minWidth: "140px" }}
                                            >
                                                ORDER
                                            </th>
                                            <th
                                                className="sort align-middle pe-3"
                                                scope="col"
                                                data-sort="status"
                                                style={{ width: "15%", minWidth: "180px" }}
                                            >
                                                STATUS
                                            </th>
                                            <th
                                                className="sort align-middle text-start"
                                                scope="col"
                                                data-sort="delivery"
                                                style={{ width: "20%", minWidth: "160px" }}
                                            >
                                                DELIVERY METHOD
                                            </th>
                                            <th
                                                className="sort align-middle pe-0 text-end"
                                                scope="col"
                                                data-sort="date"
                                                style={{ width: "15%", minWidth: "160px" }}
                                            >
                                                DATE
                                            </th>
                                            <th
                                                className="sort align-middle text-end"
                                                scope="col"
                                                data-sort="total"
                                                style={{ width: "15%", minWidth: "160px" }}
                                            >
                                                TOTAL
                                            </th>
                                            <th
                                                className="align-middle pe-0 text-end"
                                                scope="col"
                                                style={{ width: "15%" }}
                                            >
                                                {" "}
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="list" id="profile-order-table-body">
                                        <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                                            <td className="order align-middle white-space-nowrap py-2 ps-0">
                                                <a className="fw-semibold text-primary" href="#!">
                                                    #2453
                                                </a>
                                            </td>
                                            <td className="status align-middle white-space-nowrap text-start fw-bold text-body-tertiary py-2">
                                                <span className="badge badge-phoenix fs-10 badge-phoenix-success">
                                                    <span className="badge-label">Shipped</span>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16px"
                                                        height="16px"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="feather feather-check ms-1"
                                                        style={{ height: "12.8px", width: "12.8px" }}
                                                    >
                                                        <polyline points="20 6 9 17 4 12"></polyline>
                                                    </svg>
                                                </span>
                                            </td>
                                            <td className="delivery align-middle white-space-nowrap text-body py-2">
                                                Cash on delivery
                                            </td>
                                            <td className="total align-middle text-body-tertiary text-end py-2">
                                                Dec 12, 12:56 PM
                                            </td>
                                            <td className="date align-middle fw-semibold text-end py-2 text-body-highlight">
                                                $87
                                            </td>
                                            <td className="align-middle text-end white-space-nowrap pe-0 action py-2">
                                                <div className="btn-reveal-trigger position-static">
                                                    <button
                                                        className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal"
                                                        type="button"
                                                        data-bs-toggle="dropdown"
                                                        data-boundary="window"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                        data-bs-reference="parent"
                                                    >
                                                        <svg
                                                            className="svg-inline--fa fa-ellipsis fs-10"
                                                            aria-hidden="true"
                                                            focusable="false"
                                                            data-prefix="fas"
                                                            data-icon="ellipsis"
                                                            role="img"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 448 512"
                                                            data-fa-i2svg=""
                                                        >
                                                            <path
                                                                fill="currentColor"
                                                                d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"
                                                            ></path>
                                                        </svg>
                                                    </button>
                                                    <div className="dropdown-menu dropdown-menu-end py-2">
                                                        <a className="dropdown-item" href="#!">
                                                            View
                                                        </a>
                                                        <a className="dropdown-item" href="#!">
                                                            Export
                                                        </a>
                                                        <div className="dropdown-divider"></div>
                                                        <a className="dropdown-item text-danger" href="#!">
                                                            Remove
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                                            <td className="order align-middle white-space-nowrap py-2 ps-0">
                                                <a className="fw-semibold text-primary" href="#!">
                                                    #5215
                                                </a>
                                            </td>
                                            <td className="status align-middle white-space-nowrap text-start fw-bold text-body-tertiary py-2">
                                                <span className="badge badge-phoenix fs-10 badge-phoenix-primary">
                                                    <span className="badge-label">Delivered</span>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16px"
                                                        height="16px"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="feather feather-check ms-1"
                                                        style={{ height: "12.8px", width: "12.8px" }}
                                                    >
                                                        <polyline points="20 6 9 17 4 12"></polyline>
                                                    </svg>
                                                </span>
                                            </td>
                                            <td className="delivery align-middle white-space-nowrap text-body py-2">
                                                FedEx
                                            </td>
                                            <td className="total align-middle text-body-tertiary text-end py-2">
                                                Dec 10, 12:56 PM
                                            </td>
                                            <td className="date align-middle fw-semibold text-end py-2 text-body-highlight">
                                                $17
                                            </td>
                                            <td className="align-middle text-end white-space-nowrap pe-0 action py-2">
                                                <div className="btn-reveal-trigger position-static">
                                                    <button
                                                        className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal"
                                                        type="button"
                                                        data-bs-toggle="dropdown"
                                                        data-boundary="window"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                        data-bs-reference="parent"
                                                    >
                                                        <svg
                                                            className="svg-inline--fa fa-ellipsis fs-10"
                                                            aria-hidden="true"
                                                            focusable="false"
                                                            data-prefix="fas"
                                                            data-icon="ellipsis"
                                                            role="img"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 448 512"
                                                            data-fa-i2svg=""
                                                        >
                                                            <path
                                                                fill="currentColor"
                                                                d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"
                                                            ></path>
                                                        </svg>
                                                    </button>
                                                    <div className="dropdown-menu dropdown-menu-end py-2">
                                                        <a className="dropdown-item" href="#!">
                                                            View
                                                        </a>
                                                        <a className="dropdown-item" href="#!">
                                                            Export
                                                        </a>
                                                        <div className="dropdown-divider"></div>
                                                        <a className="dropdown-item text-danger" href="#!">
                                                            Remove
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                                            <td className="order align-middle white-space-nowrap py-2 ps-0">
                                                <a className="fw-semibold text-primary" href="#!">
                                                    #1352
                                                </a>
                                            </td>
                                            <td className="status align-middle white-space-nowrap text-start fw-bold text-body-tertiary py-2">
                                                <span className="badge badge-phoenix fs-10 badge-phoenix-warning">
                                                    <span className="badge-label">Pending</span>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16px"
                                                        height="16px"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="feather feather-check ms-1"
                                                        style={{ height: "12.8px", width: "12.8px" }}
                                                    >
                                                        <polyline points="20 6 9 17 4 12"></polyline>
                                                    </svg>
                                                </span>
                                            </td>
                                            <td className="delivery align-middle white-space-nowrap text-body py-2">
                                                FedEx
                                            </td>
                                            <td className="total align-middle text-body-tertiary text-end py-2">
                                                Nov 30, 12:56 PM
                                            </td>
                                            <td className="date align-middle fw-semibold text-end py-2 text-body-highlight">
                                                $120
                                            </td>
                                            <td className="align-middle text-end white-space-nowrap pe-0 action py-2">
                                                <div className="btn-reveal-trigger position-static">
                                                    <button
                                                        className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal"
                                                        type="button"
                                                        data-bs-toggle="dropdown"
                                                        data-boundary="window"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                        data-bs-reference="parent"
                                                    >
                                                        <svg
                                                            className="svg-inline--fa fa-ellipsis fs-10"
                                                            aria-hidden="true"
                                                            focusable="false"
                                                            data-prefix="fas"
                                                            data-icon="ellipsis"
                                                            role="img"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 448 512"
                                                            data-fa-i2svg=""
                                                        >
                                                            <path
                                                                fill="currentColor"
                                                                d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"
                                                            ></path>
                                                        </svg>
                                                    </button>
                                                    <div className="dropdown-menu dropdown-menu-end py-2">
                                                        <a className="dropdown-item" href="#!">
                                                            View
                                                        </a>
                                                        <a className="dropdown-item" href="#!">
                                                            Export
                                                        </a>
                                                        <div className="dropdown-divider"></div>
                                                        <a className="dropdown-item text-danger" href="#!">
                                                            Remove
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                                            <td className="order align-middle white-space-nowrap py-2 ps-0">
                                                <a className="fw-semibold text-primary" href="#!">
                                                    #2461
                                                </a>
                                            </td>
                                            <td className="status align-middle white-space-nowrap text-start fw-bold text-body-tertiary py-2">
                                                <span className="badge badge-phoenix fs-10 badge-phoenix-danger">
                                                    <span className="badge-label">Cancelled</span>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16px"
                                                        height="16px"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="feather feather-check ms-1"
                                                        style={{ height: "12.8px", width: "12.8px" }}
                                                    >
                                                        <polyline points="20 6 9 17 4 12"></polyline>
                                                    </svg>
                                                </span>
                                            </td>
                                            <td className="delivery align-middle white-space-nowrap text-body py-2">
                                                Cash on delivery
                                            </td>
                                            <td className="total align-middle text-body-tertiary text-end py-2">
                                                Nov 29, 12:56 PM
                                            </td>
                                            <td className="date align-middle fw-semibold text-end py-2 text-body-highlight">
                                                $78
                                            </td>
                                            <td className="align-middle text-end white-space-nowrap pe-0 action py-2">
                                                <div className="btn-reveal-trigger position-static">
                                                    <button
                                                        className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal"
                                                        type="button"
                                                        data-bs-toggle="dropdown"
                                                        data-boundary="window"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                        data-bs-reference="parent"
                                                    >
                                                        <svg
                                                            className="svg-inline--fa fa-ellipsis fs-10"
                                                            aria-hidden="true"
                                                            focusable="false"
                                                            data-prefix="fas"
                                                            data-icon="ellipsis"
                                                            role="img"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 448 512"
                                                            data-fa-i2svg=""
                                                        >
                                                            <path
                                                                fill="currentColor"
                                                                d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"
                                                            ></path>
                                                        </svg>
                                                    </button>
                                                    <div className="dropdown-menu dropdown-menu-end py-2">
                                                        <a className="dropdown-item" href="#!">
                                                            View
                                                        </a>
                                                        <a className="dropdown-item" href="#!">
                                                            Export
                                                        </a>
                                                        <div className="dropdown-divider"></div>
                                                        <a className="dropdown-item text-danger" href="#!">
                                                            Remove
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                                            <td className="order align-middle white-space-nowrap py-2 ps-0">
                                                <a className="fw-semibold text-primary" href="#!">
                                                    #5412
                                                </a>
                                            </td>
                                            <td className="status align-middle white-space-nowrap text-start fw-bold text-body-tertiary py-2">
                                                <span className="badge badge-phoenix fs-10 badge-phoenix-warning">
                                                    <span className="badge-label">Pending</span>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16px"
                                                        height="16px"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="feather feather-check ms-1"
                                                        style={{ height: "12.8px", width: "12.8px" }}
                                                    >
                                                        <polyline points="20 6 9 17 4 12"></polyline>
                                                    </svg>
                                                </span>
                                            </td>
                                            <td className="delivery align-middle white-space-nowrap text-body py-2">
                                                FedEx
                                            </td>
                                            <td className="total align-middle text-body-tertiary text-end py-2">
                                                Nov 22, 12:56 PM
                                            </td>
                                            <td className="date align-middle fw-semibold text-end py-2 text-body-highlight">
                                                $121
                                            </td>
                                            <td className="align-middle text-end white-space-nowrap pe-0 action py-2">
                                                <div className="btn-reveal-trigger position-static">
                                                    <button
                                                        className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal"
                                                        type="button"
                                                        data-bs-toggle="dropdown"
                                                        data-boundary="window"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                        data-bs-reference="parent"
                                                    >
                                                        <svg
                                                            className="svg-inline--fa fa-ellipsis fs-10"
                                                            aria-hidden="true"
                                                            focusable="false"
                                                            data-prefix="fas"
                                                            data-icon="ellipsis"
                                                            role="img"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 448 512"
                                                            data-fa-i2svg=""
                                                        >
                                                            <path
                                                                fill="currentColor"
                                                                d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"
                                                            ></path>
                                                        </svg>
                                                    </button>
                                                    <div className="dropdown-menu dropdown-menu-end py-2">
                                                        <a className="dropdown-item" href="#!">
                                                            View
                                                        </a>
                                                        <a className="dropdown-item" href="#!">
                                                            Export
                                                        </a>
                                                        <div className="dropdown-divider"></div>
                                                        <a className="dropdown-item text-danger" href="#!">
                                                            Remove
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                                            <td className="order align-middle white-space-nowrap py-2 ps-0">
                                                <a className="fw-semibold text-primary" href="#!">
                                                    #1254
                                                </a>
                                            </td>
                                            <td className="status align-middle white-space-nowrap text-start fw-bold text-body-tertiary py-2">
                                                <span className="badge badge-phoenix fs-10 badge-phoenix-success">
                                                    <span className="badge-label">Shipped</span>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16px"
                                                        height="16px"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="feather feather-check ms-1"
                                                        style={{ height: "12.8px", width: "12.8px" }}
                                                    >
                                                        <polyline points="20 6 9 17 4 12"></polyline>
                                                    </svg>
                                                </span>
                                            </td>
                                            <td className="delivery align-middle white-space-nowrap text-body py-2">
                                                Cash on delivery
                                            </td>
                                            <td className="total align-middle text-body-tertiary text-end py-2">
                                                Nov 18, 12:56 PM
                                            </td>
                                            <td className="date align-middle fw-semibold text-end py-2 text-body-highlight">
                                                $115
                                            </td>
                                            <td className="align-middle text-end white-space-nowrap pe-0 action py-2">
                                                <div className="btn-reveal-trigger position-static">
                                                    <button
                                                        className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal"
                                                        type="button"
                                                        data-bs-toggle="dropdown"
                                                        data-boundary="window"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                        data-bs-reference="parent"
                                                    >
                                                        <svg
                                                            className="svg-inline--fa fa-ellipsis fs-10"
                                                            aria-hidden="true"
                                                            focusable="false"
                                                            data-prefix="fas"
                                                            data-icon="ellipsis"
                                                            role="img"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 448 512"
                                                            data-fa-i2svg=""
                                                        >
                                                            <path
                                                                fill="currentColor"
                                                                d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"
                                                            ></path>
                                                        </svg>
                                                    </button>
                                                    <div className="dropdown-menu dropdown-menu-end py-2">
                                                        <a className="dropdown-item" href="#!">
                                                            View
                                                        </a>
                                                        <a className="dropdown-item" href="#!">
                                                            Export
                                                        </a>
                                                        <div className="dropdown-divider"></div>
                                                        <a className="dropdown-item text-danger" href="#!">
                                                            Remove
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                                            <td className="order align-middle white-space-nowrap py-2 ps-0">
                                                <a className="fw-semibold text-primary" href="#!">
                                                    #5415
                                                </a>
                                            </td>
                                            <td className="status align-middle white-space-nowrap text-start fw-bold text-body-tertiary py-2">
                                                <span className="badge badge-phoenix fs-10 badge-phoenix-primary">
                                                    <span className="badge-label">Delivered</span>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16px"
                                                        height="16px"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="feather feather-check ms-1"
                                                        style={{ height: "12.8px", width: "12.8px" }}
                                                    >
                                                        <polyline points="20 6 9 17 4 12"></polyline>
                                                    </svg>
                                                </span>
                                            </td>
                                            <td className="delivery align-middle white-space-nowrap text-body py-2">
                                                FedEx
                                            </td>
                                            <td className="total align-middle text-body-tertiary text-end py-2">
                                                Nov 10, 12:56 PM
                                            </td>
                                            <td className="date align-middle fw-semibold text-end py-2 text-body-highlight">
                                                $78
                                            </td>
                                            <td className="align-middle text-end white-space-nowrap pe-0 action py-2">
                                                <div className="btn-reveal-trigger position-static">
                                                    <button
                                                        className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal"
                                                        type="button"
                                                        data-bs-toggle="dropdown"
                                                        data-boundary="window"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                        data-bs-reference="parent"
                                                    >
                                                        <svg
                                                            className="svg-inline--fa fa-ellipsis fs-10"
                                                            aria-hidden="true"
                                                            focusable="false"
                                                            data-prefix="fas"
                                                            data-icon="ellipsis"
                                                            role="img"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 448 512"
                                                            data-fa-i2svg=""
                                                        >
                                                            <path
                                                                fill="currentColor"
                                                                d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"
                                                            ></path>
                                                        </svg>
                                                    </button>
                                                    <div className="dropdown-menu dropdown-menu-end py-2">
                                                        <a className="dropdown-item" href="#!">
                                                            View
                                                        </a>
                                                        <a className="dropdown-item" href="#!">
                                                            Export
                                                        </a>
                                                        <div className="dropdown-divider"></div>
                                                        <a className="dropdown-item text-danger" href="#!">
                                                            Remove
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                                            <td className="order align-middle white-space-nowrap py-2 ps-0">
                                                <a className="fw-semibold text-primary" href="#!">
                                                    #1287
                                                </a>
                                            </td>
                                            <td className="status align-middle white-space-nowrap text-start fw-bold text-body-tertiary py-2">
                                                <span className="badge badge-phoenix fs-10 badge-phoenix-warning">
                                                    <span className="badge-label">Pending</span>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16px"
                                                        height="16px"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="feather feather-check ms-1"
                                                        style={{ height: "12.8px", width: "12.8px" }}
                                                    >
                                                        <polyline points="20 6 9 17 4 12"></polyline>
                                                    </svg>
                                                </span>
                                            </td>
                                            <td className="delivery align-middle white-space-nowrap text-body py-2">
                                                FedEx
                                            </td>
                                            <td className="total align-middle text-body-tertiary text-end py-2">
                                                Nov 5, 12:56 PM
                                            </td>
                                            <td className="date align-middle fw-semibold text-end py-2 text-body-highlight">
                                                $44
                                            </td>
                                            <td className="align-middle text-end white-space-nowrap pe-0 action py-2">
                                                <div className="btn-reveal-trigger position-static">
                                                    <button
                                                        className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal"
                                                        type="button"
                                                        data-bs-toggle="dropdown"
                                                        data-boundary="window"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                        data-bs-reference="parent"
                                                    >
                                                        <svg
                                                            className="svg-inline--fa fa-ellipsis fs-10"
                                                            aria-hidden="true"
                                                            focusable="false"
                                                            data-prefix="fas"
                                                            data-icon="ellipsis"
                                                            role="img"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 448 512"
                                                            data-fa-i2svg=""
                                                        >
                                                            <path
                                                                fill="currentColor"
                                                                d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"
                                                            ></path>
                                                        </svg>
                                                    </button>
                                                    <div className="dropdown-menu dropdown-menu-end py-2">
                                                        <a className="dropdown-item" href="#!">
                                                            View
                                                        </a>
                                                        <a className="dropdown-item" href="#!">
                                                            Export
                                                        </a>
                                                        <div className="dropdown-divider"></div>
                                                        <a className="dropdown-item text-danger" href="#!">
                                                            Remove
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="row align-items-center justify-content-between py-2 pe-0 fs-9">
                                <div className="col-auto d-flex">
                                    <p
                                        className="mb-0 d-none d-sm-block me-3 fw-semibold text-body"
                                        data-list-info="data-list-info"
                                    >
                                        1 to 6{" "}
                                        <span className="text-body-tertiary"> Items of </span>9
                                    </p>
                                    <a className="fw-semibold" href="#!" data-list-view="*">
                                        View all
                                        <FontAwesomeIcon
                                            icon={faAngleRight}
                                            className="svg-inline--fa fa-angle-right ms-1"
                                            data-fa-transform="down-1"
                                        />
                                    </a>
                                    <a
                                        className="fw-semibold d-none"
                                        href="#!"
                                        data-list-view="less"
                                    >
                                        View Less
                                        <FontAwesomeIcon
                                            icon={faAngleRight}
                                            className="svg-inline--fa fa-angle-right ms-1"
                                            data-fa-transform="down-1"
                                        />
                                    </a>
                                </div>
                            </div>
                            <div className="pagination d-none"></div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="tab-wishlist" role="tabpanel" aria-labelledby="wishlist-tab">
                        <div className="border-y border-translucent" id="productWishlistTable" data-list="{&quot;valueNames&quot;:[&quot;products&quot;,&quot;color&quot;,&quot;size&quot;,&quot;price&quot;,&quot;quantity&quot;,&quot;total&quot;],&quot;page&quot;:5,&quot;pagination&quot;:true}">
                            <div className="table-responsive scrollbar">
                                <table className="table fs-9 mb-0">
                                    <thead>
                                        <tr>
                                            <th className="sort white-space-nowrap align-middle fs-10" scope="col" style={{ width: "7%" }} />
                                            <th className="sort white-space-nowrap align-middle" scope="col" style={{ width: "30%", minWidth: "250px" }} data-sort="products">PRODUCTS</th>
                                            <th className="sort align-middle" scope="col" data-sort="color" style={{ width: "16%" }}>COLOR</th>
                                            <th className="sort align-middle" scope="col" data-sort="size" style={{ width: "10%" }}>SIZE</th>
                                            <th className="sort align-middle text-end" scope="col" data-sort="price" style={{ width: "10%" }}>PRICE</th>
                                            <th className="sort align-middle text-end pe-0" scope="col" style={{ width: "35%" }}> </th>
                                        </tr>
                                    </thead>
                                    <tbody className="list" id="profile-wishlist-table-body">
                                        <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                                        <td className="align-middle white-space-nowrap ps-0 py-0"><a className="border border-translucent rounded-2 d-inline-block" href="../../../apps/e-commerce/landing/product-details.html">
                                            <img src="https://cdn.tuoitre.vn/thumb_w/640/2018/6/4/photo-1-1528103764161215753461.jpg" alt="" width="53"></img></a></td>
                                        <td className="products align-middle pe-11"><a className="fw-semibold mb-0 line-clamp-1" href="../../../apps/e-commerce/landing/product-details.html">Fitbit Sense Advanced Smartwatch with Tools for Heart Health, Stress Management &amp; Skin Temperature Trends, Carbon/Graphite, One Size (S &amp; L Bands)</a></td>
                                        <td className="color align-middle white-space-nowrap fs-9 text-body">Pure matte black</td>
                                        <td className="size align-middle white-space-nowrap text-body-tertiary fs-9 fw-semibold">42</td>
                                        <td className="price align-middle text-body fs-9 fw-semibold text-end">$57</td>
                                        <td className="total align-middle fw-bold text-body-highlight text-end text-nowrap pe-0"><button className="btn btn-sm text-body-quaternary text-body-tertiary-hover me-2"><svg className="svg-inline--fa fa-trash" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path></svg>{/* <span className="fas fa-trash"></span>*/}
                                        </button><button className="btn btn-primary fs-10"><svg className="svg-inline--fa fa-cart-shopping me-1 fs-10" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cart-shopping" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path></svg>Add to cart</button></td>
                                    </tr>
                                    <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                                        <td className="align-middle white-space-nowrap ps-0 py-0"><a className="border border-translucent rounded-2 d-inline-block" href="../../../apps/e-commerce/landing/product-details.html">
                                            <img src="https://cdn.tuoitre.vn/thumb_w/640/2018/6/4/photo-1-1528103764161215753461.jpg" alt="" width="53"></img></a></td>
                                        <td className="products align-middle pe-11"><a className="fw-semibold mb-0 line-clamp-1" href="../../../apps/e-commerce/landing/product-details.html">Fitbit Sense Advanced Smartwatch with Tools for Heart Health, Stress Management &amp; Skin Temperature Trends, Carbon/Graphite, One Size (S &amp; L Bands)</a></td>
                                        <td className="color align-middle white-space-nowrap fs-9 text-body">Pure matte black</td>
                                        <td className="size align-middle white-space-nowrap text-body-tertiary fs-9 fw-semibold">42</td>
                                        <td className="price align-middle text-body fs-9 fw-semibold text-end">$57</td>
                                        <td className="total align-middle fw-bold text-body-highlight text-end text-nowrap pe-0"><button className="btn btn-sm text-body-quaternary text-body-tertiary-hover me-2"><svg className="svg-inline--fa fa-trash" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path></svg>{/* <span className="fas fa-trash"></span>*/}
                                        </button><button className="btn btn-primary fs-10"><svg className="svg-inline--fa fa-cart-shopping me-1 fs-10" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cart-shopping" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path></svg>Add to cart</button></td>
                                    </tr> <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                                        <td className="align-middle white-space-nowrap ps-0 py-0"><a className="border border-translucent rounded-2 d-inline-block" href="../../../apps/e-commerce/landing/product-details.html">
                                            <img src="https://cdn.tuoitre.vn/thumb_w/640/2018/6/4/photo-1-1528103764161215753461.jpg" alt="" width="53"></img></a></td>
                                        <td className="products align-middle pe-11"><a className="fw-semibold mb-0 line-clamp-1" href="../../../apps/e-commerce/landing/product-details.html">Fitbit Sense Advanced Smartwatch with Tools for Heart Health, Stress Management &amp; Skin Temperature Trends, Carbon/Graphite, One Size (S &amp; L Bands)</a></td>
                                        <td className="color align-middle white-space-nowrap fs-9 text-body">Pure matte black</td>
                                        <td className="size align-middle white-space-nowrap text-body-tertiary fs-9 fw-semibold">42</td>
                                        <td className="price align-middle text-body fs-9 fw-semibold text-end">$57</td>
                                        <td className="total align-middle fw-bold text-body-highlight text-end text-nowrap pe-0"><button className="btn btn-sm text-body-quaternary text-body-tertiary-hover me-2"><svg className="svg-inline--fa fa-trash" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path></svg>{/* <span className="fas fa-trash"></span>*/}
                                        </button><button className="btn btn-primary fs-10"><svg className="svg-inline--fa fa-cart-shopping me-1 fs-10" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cart-shopping" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path></svg>Add to cart</button></td>
                                    </tr> <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                                        <td className="align-middle white-space-nowrap ps-0 py-0"><a className="border border-translucent rounded-2 d-inline-block" href="../../../apps/e-commerce/landing/product-details.html">
                                            <img src="https://cdn.tuoitre.vn/thumb_w/640/2018/6/4/photo-1-1528103764161215753461.jpg" alt="" width="53"></img></a></td>
                                        <td className="products align-middle pe-11"><a className="fw-semibold mb-0 line-clamp-1" href="../../../apps/e-commerce/landing/product-details.html">Fitbit Sense Advanced Smartwatch with Tools for Heart Health, Stress Management &amp; Skin Temperature Trends, Carbon/Graphite, One Size (S &amp; L Bands)</a></td>
                                        <td className="color align-middle white-space-nowrap fs-9 text-body">Pure matte black</td>
                                        <td className="size align-middle white-space-nowrap text-body-tertiary fs-9 fw-semibold">42</td>
                                        <td className="price align-middle text-body fs-9 fw-semibold text-end">$57</td>
                                        <td className="total align-middle fw-bold text-body-highlight text-end text-nowrap pe-0"><button className="btn btn-sm text-body-quaternary text-body-tertiary-hover me-2"><svg className="svg-inline--fa fa-trash" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path></svg>{/* <span className="fas fa-trash"></span>*/}
                                        </button><button className="btn btn-primary fs-10"><svg className="svg-inline--fa fa-cart-shopping me-1 fs-10" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cart-shopping" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path></svg>Add to cart</button></td>
                                    </tr> <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                                        <td className="align-middle white-space-nowrap ps-0 py-0"><a className="border border-translucent rounded-2 d-inline-block" href="../../../apps/e-commerce/landing/product-details.html">
                                            <img src="https://cdn.tuoitre.vn/thumb_w/640/2018/6/4/photo-1-1528103764161215753461.jpg" alt="" width="53"></img></a></td>
                                        <td className="products align-middle pe-11"><a className="fw-semibold mb-0 line-clamp-1" href="../../../apps/e-commerce/landing/product-details.html">Fitbit Sense Advanced Smartwatch with Tools for Heart Health, Stress Management &amp; Skin Temperature Trends, Carbon/Graphite, One Size (S &amp; L Bands)</a></td>
                                        <td className="color align-middle white-space-nowrap fs-9 text-body">Pure matte black</td>
                                        <td className="size align-middle white-space-nowrap text-body-tertiary fs-9 fw-semibold">42</td>
                                        <td className="price align-middle text-body fs-9 fw-semibold text-end">$57</td>
                                        <td className="total align-middle fw-bold text-body-highlight text-end text-nowrap pe-0"><button className="btn btn-sm text-body-quaternary text-body-tertiary-hover me-2"><svg className="svg-inline--fa fa-trash" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path></svg>{/* <span className="fas fa-trash"></span>*/}
                                        </button><button className="btn btn-primary fs-10"><svg className="svg-inline--fa fa-cart-shopping me-1 fs-10" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cart-shopping" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path></svg>Add to cart</button></td>
                                    </tr>
                                        </tbody>
                                </table>
                            </div>
                            <div className="row align-items-center justify-content-between py-2 pe-0 fs-9">
                                <div className="col-auto d-flex">
                                    <div className="d-flex align-items-center">
                                        <p className="mb-0 d-none d-sm-block me-3 fw-semibold text-body" data-list-info="data-list-info">
                                            1 to 5 <span className="text-body-tertiary"> Items of </span>9
                                        </p>
                                        <a className="fw-semibold" href="#!" data-list-view="*">
                                            View all
                                            <svg className="svg-inline--fa fa-angle-right ms-1" data-fa-transform="down-1" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg="">
                                                <g transform="translate(160 256)">
                                                    <g transform="translate(0, 32)  scale(1, 1)  rotate(0 0 0)">
                                                        <path fill="currentColor" d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" transform="translate(-160 -256)"></path>
                                                    </g>
                                                </g>
                                            </svg>
                                        </a>
                                    </div>                      </div>
                                <div className="col-auto d-flex">
                                    <button className="page-link disabled" data-list-pagination="prev" disabled>
                                        <svg className="svg-inline--fa fa-chevron-left" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg="">
                                            <path fill="currentColor" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"></path>
                                        </svg>
                                    </button>
                                    <ul className="mb-0 pagination">
                                        <li className="active"><button className="page" type="button" data-i="1" data-page="5">1</button></li>
                                        <li><button className="page" type="button" data-i="2" data-page="5">2</button></li>
                                    </ul>
                                    <button className="page-link pe-0" data-list-pagination="next">
                                        <svg className="svg-inline--fa fa-chevron-right" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg="">
                                            <path fill="currentColor" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="tab-personal-info" role="tabpanel" aria-labelledby="personal-info-tab">
                        <div className="row gx-3 gy-4 mb-5">
                        <div className="col-12 col-lg-6">
      <label className="form-label text-body-highlight fs-8 ps-0 text-capitalize lh-sm" htmlFor="fullName">
        Full name
      </label>
      <input className="form-control" id="fullName" type="text" placeholder="Full name" />
    </div>                            <div className="col-12 col-lg-6"><label className="form-label text-body-highlight fs-8 ps-0 text-capitalize lh-sm" htmlFor="gender">Gender</label><select className="form-select" id="gender">
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="non-binary">Non-binary</option>
                                <option value="not-to-say">Prefer not to say</option>
                            </select></div>
                            <div className="col-12 col-lg-6">
      <label className="form-label text-body-highlight fs-8 ps-0 text-capitalize lh-sm" htmlFor="email">
        Email
      </label>
      <input className="form-control" id="email" type="text" placeholder="Email" />
    </div>                            <div className="col-12 col-lg-6">
                                <div className="row g-2 gy-lg-0"><label className="form-label text-body-highlight fs-8 ps-1 text-capitalize lh-sm mb-1">Date of birth</label>
                                    <div className="col-6 col-sm-2 col-lg-3 col-xl-2"><select className="form-select" id="date">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                        <option value="13">13</option>
                                        <option value="14">14</option>
                                        <option value="15">15</option>
                                        <option value="16">16</option>
                                        <option value="17">17</option>
                                        <option value="18">18</option>
                                        <option value="19">19</option>
                                        <option value="20">20</option>
                                        <option value="21">21</option>
                                        <option value="22">22</option>
                                        <option value="23">23</option>
                                        <option value="24">24</option>
                                        <option value="25">25</option>
                                        <option value="26">26</option>
                                        <option value="27">27</option>
                                        <option value="28">28</option>
                                        <option value="29">29</option>
                                        <option value="30">30</option>
                                    </select></div>
                                    <div className="col-6 col-sm-2 col-lg-3 col-xl-2"><select className="form-select" id="month">
                                        <option value="Jan">Jan</option>
                                        <option value="Feb">Feb</option>
                                        <option value="Mar">Mar</option>
                                        <option value="Apr">Apr</option>
                                        <option value="May">May</option>
                                        <option value="Jun">Jun</option>
                                        <option value="Jul">Jul</option>
                                        <option value="Aug">Aug</option>
                                        <option value="Sep">Sep</option>
                                        <option value="Oct">Oct</option>
                                        <option value="Nov">Nov</option>
                                        <option value="Dec">Dec</option>
                                    </select></div>
                                    <div className="col-12 col-sm-8 col-lg-6 col-xl-8"><select className="form-select" id="year">
                                        <option value="1990">1990</option>
                                        <option value="1991">1991</option>
                                        <option value="1992">1992</option>
                                        <option value="1993">1993</option>
                                        <option value="1994">1994</option>
                                        <option value="1995">1995</option>
                                        <option value="1996">1996</option>
                                        <option value="1997">1997</option>
                                        <option value="1998">1998</option>
                                        <option value="1999">1999</option>
                                        <option value="2000">2000</option>
                                        <option value="2001">2001</option>
                                        <option value="2002">2002</option>
                                        <option value="2003">2003</option>
                                        <option value="2004">2004</option>
                                        <option value="2005">2005</option>
                                        <option value="2006">2006</option>
                                        <option value="2007">2007</option>
                                        <option value="2008">2008</option>
                                        <option value="2009">2009</option>
                                        <option value="2010">2010</option>
                                        <option value="2011">2011</option>
                                        <option value="2012">2012</option>
                                        <option value="2013">2013</option>
                                        <option value="2014">2014</option>
                                        <option value="2015">2015</option>
                                        <option value="2016">2016</option>
                                        <option value="2017">2017</option>
                                        <option value="2018">2018</option>
                                        <option value="2019">2019</option>
                                        <option value="2020">2020</option>
                                        <option value="2021">2021</option>
                                        <option value="2022">2022</option>
                                    </select></div>
                                </div>
                            </div>
                            <div className="row g-3">
                                <div className="col-12 col-lg-6">
                                    <label className="form-label text-body-highlight fw-bold fs-8 ps-0 text-capitalize lh-sm" htmlFor="phone">
                                        Phone
                                    </label>
                                    <input className="form-control" id="phone" type="text" placeholder="+1234567890" />
                                </div>
                                <div className="col-12 col-lg-6">
                                    <label className="form-label text-body-highlight fw-bold fs-8 ps-0 text-capitalize lh-sm" htmlFor="alternative_phone">
                                        Alternative phone
                                    </label>
                                    <input className="form-control" id="alternative_phone" type="text" placeholder="+1234567890" />
                                </div>
                                <div className="col-12 col-lg-4">
                                    <label className="form-label text-body-highlight fw-bold fs-8 ps-0 text-capitalize lh-sm" htmlFor="facebook">
                                        Facebook
                                    </label>
                                    <input className="form-control" id="facebook" type="text" placeholder="Facebook" />
                                </div>
                                <div className="col-12 col-lg-4">
                                    <label className="form-label text-body-highlight fw-bold fs-8 ps-0 text-capitalize lh-sm" htmlFor="instagram">
                                        Instagram
                                    </label>
                                    <input className="form-control" id="instagram" type="text" placeholder="Instagram" />
                                </div>
                                <div className="col-12 col-lg-4">
                                    <label className="form-label text-body-highlight fw-bold fs-8 ps-0 text-capitalize lh-sm" htmlFor="twitter">
                                        Twitter
                                    </label>
                                    <input className="form-control" id="twitter" type="text" placeholder="Twitter" />
                                </div>
                            </div>
                        </div>
                        <div className="text-end"><button className="btn btn-primary px-7">Save changes</button></div>
                    </div>
                </div>
            </div>
        </section>
        </NavbarVertical>
    );
};

export default ProfilePage
