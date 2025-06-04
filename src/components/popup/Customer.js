import "./Customer.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primereact/resources/primereact.min.css";

import icon from "../../assets/images/customer.png";

import { useState } from "react";
import { FilterMatchMode } from "primereact/api";
import { InputText } from "primereact/inputtext";

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
            date: '1/1/2025',
            status: 'Chưa xử lý' 
        },
        { 
            id: '', 
            name: 'Lại Văn Đại', 
            complaint: 'Sợi lẫn màu tạp', 
            date: '1/1/2025',
            status: 'Chưa xử lý' 
        },
        { 
            id: '', 
            name: 'Hoàng khánh Hòa', 
            complaint: 'Sợi lẫn màu tạp', 
            date: '1/1/2025',
            status: 'Chưa xử lý' 
        },
        { 
            id: '', 
            name: 'Nguyễn Chí Công', 
            complaint: 'Sợi lẫn màu tạp', 
            date: '1/1/2025',
            status: 'Chưa xử lý' 
        },
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
            date: '1/1/2025',
            status: 'Chưa xử lý' 
        },
        { 
            id: '', 
            name: 'Lại Văn Đại', 
            complaint: 'Sợi lẫn màu tạp', 
            date: '1/1/2025',
            status: 'Chưa xử lý' 
        },
        { 
            id: '', 
            name: 'Hoàng khánh Hòa', 
            complaint: 'Sợi lẫn màu tạp', 
            date: '1/1/2025',
            status: 'Chưa xử lý' 
        },
        { 
            id: '', 
            name: 'Nguyễn Chí Công', 
            complaint: 'Sợi lẫn màu tạp', 
            date: '1/1/2025',
            status: 'Chưa xử lý' 
        },
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
            date: '1/1/2025',
            status: 'Chưa xử lý' 
        },
        { 
            id: '', 
            name: 'Lại Văn Đại', 
            complaint: 'Sợi lẫn màu tạp', 
            date: '1/1/2025',
            status: 'Chưa xử lý' 
        },
        { 
            id: '', 
            name: 'Hoàng khánh Hòa', 
            complaint: 'Sợi lẫn màu tạp', 
            date: '1/1/2025',
            status: 'Chưa xử lý' 
        },
        { 
            id: '', 
            name: 'Nguyễn Chí Công', 
            complaint: 'Sợi lẫn màu tạp', 
            date: '1/1/2025',
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
                header="Bảng theo dõi thông tin khiếu nại" 
                className="customer-complain"
                draggable={false}
                dismissableMask
            >
                <InputText
                    type="text"
                    placeholder="Tìm kiếm..."
                    onInput={(e) => setFilters({ ...filters, global: { value: e.target.value, matchMode: FilterMatchMode.CONTAINS } })}
                    className="p-inputtext-sm p-datatable-filter"
                />
                <DataTable 
                    value={customer} 
                    className="p-datatable-striped" 
                    filters={filters}
                    paginator
                    rows={5}
                    tableStyle={{ minWidth: '50rem' }}
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