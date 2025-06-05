import "./css/Customer.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primereact/resources/primereact.min.css";

import icon from "../../assets/images/customer.png";
import SeachBar from "../searchbar/SearchBar";

import { useState } from "react";
import { FilterMatchMode } from "primereact/api";

import{ Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';


function Customer() {
    const [visible, setVisible] = useState(false);
    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS }
    });

    const customer = [
        { 
            id: '', 
            name: 'Hà Gia Kính', 
            complaint: 'Sợi lẫn màu tạp', 
            date: '1/1/2025',
            status: 'Chưa xử lý' 
        },
        { 
            id: '', 
            name: 'Phạm Hương Giang', 
            complaint: 'Sợi lẫn màu tạp', 
            date: '2/1/2025',
            status: 'Chưa xử lý' 
        },
        { 
            id: '', 
            name: 'Lại Văn Đại', 
            complaint: 'Sợi lẫn màu tạp', 
            date: '3/1/2025',
            status: 'Chưa xử lý' 
        },
        { 
            id: '', 
            name: 'Hoàng khánh Hòa', 
            complaint: 'Sợi lẫn màu tạp', 
            date: '4/1/2025',
            status: 'Chưa xử lý' 
        },
        { 
            id: '', 
            name: 'Nguyễn Chí Công', 
            complaint: 'Sợi lẫn màu tạp', 
            date: '5/1/2025',
            status: 'Chưa xử lý' 
        },
        { 
            id: '', 
            name: 'Hà Gia Kính', 
            complaint: 'Sợi lẫn màu tạp', 
            date: '6/1/2025',
            status: 'Chưa xử lý' 
        },
        { 
            id: '', 
            name: 'Phạm Hương Giang', 
            complaint: 'Sợi lẫn màu tạp', 
            date: '7/1/2025',
            status: 'Chưa xử lý' 
        },
        { 
            id: '', 
            name: 'Lại Văn Đại', 
            complaint: 'Sợi lẫn màu tạp', 
            date: '8/1/2025',
            status: 'Chưa xử lý' 
        },
        { 
            id: '', 
            name: 'Hoàng khánh Hòa', 
            complaint: 'Sợi lẫn màu tạp', 
            date: '9/1/2025',
            status: 'Chưa xử lý' 
        },
        { 
            id: '', 
            name: 'Nguyễn Chí Công', 
            complaint: 'Sợi lẫn màu tạp', 
            date: '10/1/2025',
            status: 'Chưa xử lý' 
        },
        { 
            id: '', 
            name: 'Hà Gia Kính', 
            complaint: 'Sợi lẫn màu tạp', 
            date: '11/1/2025',
            status: 'Chưa xử lý' 
        },
        { 
            id: '', 
            name: 'Phạm Hương Giang', 
            complaint: 'Sợi lẫn màu tạp', 
            date: '12/1/2025',
            status: 'Chưa xử lý' 
        },
        { 
            id: '', 
            name: 'Lại Văn Đại', 
            complaint: 'Sợi lẫn màu tạp', 
            date: '13/1/2025',
            status: 'Chưa xử lý' 
        },
        { 
            id: '', 
            name: 'Hoàng khánh Hòa', 
            complaint: 'Sợi lẫn màu tạp', 
            date: '14/1/2025',
            status: 'Chưa xử lý' 
        },
        { 
            id: '', 
            name: 'Nguyễn Chí Công', 
            complaint: 'Sợi lẫn màu tạp', 
            date: '15/1/2025',
            status: 'Chưa xử lý' 
        }
    ];

    return ( 
        <div className="button-container">
            <Button 
            className="customer-button" 
            onClick={() => setVisible(true)} 
            >
            <div className="customer-content">
                <img src={icon} alt="icon" className="customer-button-icon-img" />
                <span className="customer-button-title">Khách hàng</span>
            </div>
            </Button>
            <Dialog 
                visible={visible} 
                onHide={() => setVisible(false)} 
                className="customer-complain"
                draggable={false}
                dismissableMask
            >
                <div className="customer-header">
                    <span className="customer-title">Bảng theo dõi thông tin khiếu nại</span>
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
                    <Column field="complaint" header="Nội dung" />
                    <Column field="date" header="Ngày khiếu nại" />
                    <Column field="status" header="Trạng thái" />  
                </DataTable>
            </Dialog>
        </div>
     );
}

export default Customer;