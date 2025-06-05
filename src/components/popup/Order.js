import "./css/Order.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primereact/resources/primereact.min.css";

import icon from "../../assets/images/order.png";
import SeachBar from "../searchbar/SearchBar";

import { useState } from "react";
import { FilterMatchMode } from "primereact/api";

import{ Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

function Order() {
    const [visible, setVisible] = useState(false);
    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS }
    });
    
    const customer = [
        { 
            id: '', 
            name: 'Hà Gia Kính', 
            complaint: 'PO012 - 10.000Kg', 
            date: '1/1/2025',
            status: 'Đã xác nhận' 
        },
        { 
            id: '', 
            name: 'Phạm Hương Giang', 
            complaint: 'PO012 - 10.000Kg', 
            date: '2/1/2025',
            status: 'Đang xử lý' 
        },
        { 
            id: '', 
            name: 'Lại Văn Đại', 
            complaint: 'PO012 - 10.000Kg', 
            date: '3/1/2025',
            status: 'Đã xác nhận' 
        },
        { 
            id: '', 
            name: 'Hoàng khánh Hòa', 
            complaint: 'PO012 - 10.000Kg', 
            date: '4/1/2025',
            status: 'Đã xác nhận' 
        },
        { 
            id: '', 
            name: 'Nguyễn Chí Công', 
            complaint: 'PO012 - 10.000Kg', 
            date: '5/1/2025',
            status: 'Đã xác nhận' 
        },
        { 
            id: '', 
            name: 'Hà Gia Kính', 
            complaint: 'PO012 - 10.000Kg', 
            date: '6/1/2025',
            status: 'Đã xác nhận' 
        },
        { 
            id: '', 
            name: 'Phạm Hương Giang', 
            complaint: 'PO012 - 10.000Kg', 
            date: '7/1/2025',
            status: 'Đang xử lý' 
        },
        { 
            id: '', 
            name: 'Lại Văn Đại', 
            complaint: 'PO012 - 10.000Kg', 
            date: '8/1/2025',
            status: 'Đã xác nhận' 
        },
        { 
            id: '', 
            name: 'Hoàng khánh Hòa', 
            complaint: 'PO012 - 10.000Kg', 
            date: '9/1/2025',
            status: 'Đã xác nhận' 
        },
        { 
            id: '', 
            name: 'Nguyễn Chí Công', 
            complaint: 'PO012 - 10.000Kg', 
            date: '10/1/2025',
            status: 'Đã xác nhận' 
        },
        { 
            id: '', 
            name: 'Hà Gia Kính', 
            complaint: 'PO012 - 10.000Kg', 
            date: '11/1/2025',
            status: 'Đã xác nhận' 
        },
        { 
            id: '', 
            name: 'Phạm Hương Giang', 
            complaint: 'PO012 - 10.000Kg', 
            date: '12/1/2025',
            status: 'Đang xử lý' 
        },
        { 
            id: '', 
            name: 'Lại Văn Đại', 
            complaint: 'PO012 - 10.000Kg', 
            date: '13/1/2025',
            status: 'Đã xác nhận' 
        },
        { 
            id: '', 
            name: 'Hoàng khánh Hòa', 
            complaint: 'PO012 - 10.000Kg', 
            date: '14/1/2025',
            status: 'Đã xác nhận' 
        },
        { 
            id: '', 
            name: 'Nguyễn Chí Công', 
            complaint: 'PO012 - 10.000Kg', 
            date: '15/1/2025',
            status: 'Đã xác nhận' 
        }
    ]

    return ( 
        <div className="button-container">
            <Button 
            className="order-button" 
            onClick={() => setVisible(true)} 
            >
            <div className="order-content">
                <img src={icon} alt="icon" className="order-button-icon-img" />
                <span className="order-button-title">Kế hoạch đơn hàng</span>
            </div>
            </Button>
            <Dialog 
                visible={visible} 
                onHide={() => setVisible(false)} 
                className="order-complain"
                draggable={false}
                dismissableMask
            >
                <div className="order-header">
                    <span className="order-title">Kế hoạch đơn hàng khách hàng</span>
                    <SeachBar 
                        value={filters.global?.value || ""}
                        onInput={(e) =>
                            setFilters({
                                ...filters,
                                global: { value: e.target.value, matchMode: FilterMatchMode.CONTAINS }
                            })
                        }
                    />
                </div>
                <DataTable
                    value={customer} 
                    className="p-datatable-striped" 
                    filters={filters}
                    paginator
                    rows={5}
                    paginatorTemplate="PageLinks"
                    tableStyle={{ minWidth: '50rem' }}
                    emptyMessage={<br />}
                >
                    <Column field="id" header="STT" />
                    <Column field="name" header="Khách hàng" />
                    <Column field="complaint" header="Đơn hàng" />
                    <Column field="date" header="Ngày giao" />
                    <Column field="status" header="Trạng thái" className="status"/>  
                </DataTable>
            </Dialog>
        </div>
     );
}

export default Order;