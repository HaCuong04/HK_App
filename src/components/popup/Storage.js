import "./css/Storage.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primereact/resources/primereact.min.css";

import icon from "../../assets/images/storage.png";
import SeachBar from "../searchbar/SearchBar";
import LineDemo from "../LineChart";

import { useEffect, useState } from "react";
import { FilterMatchMode } from "primereact/api";

import { Link } from "react-router-dom";
import{ Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';


function Storage() {
    const [visible, setVisible] = useState(false);
    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS }
    });

    const statusBodyTemplate = (rowData) => (
        <span style={{ color: rowData.status === "Thiếu" ? "#e73e3e" : "#3e49e7" }}>
            {rowData.status}
        </span>
    );
    
    const customer = [
        { 
            id: '', 
            name: 'Bông Brazil', 
            complaint: '2.000', 
            date: '2.000',
            status: '' 
        },
        { 
            id: '', 
            name: 'Phạm Hương Giang', 
            complaint: '2.000', 
            date: '2.000',
            status: 'Thiếu' 
        },
        { 
            id: '', 
            name: 'Lại Văn Đại', 
            complaint: '2.000', 
            date: '2.000',
            status: 'Đủ cho 155 ngày' 
        },
        { 
            id: '', 
            name: 'Hoàng khánh Hòa', 
            complaint: '2.000', 
            date: '2.000',
            status: 'Đủ cho 220 ngày' 
        },
        { 
            id: '', 
            name: 'Nguyễn Chí Công', 
            complaint: '2.000', 
            date: '2.000',
            status: 'Đủ cho 330 ngày' 
        },
        { 
            id: '', 
            name: 'Hà Gia Kính', 
            complaint: '2.000', 
            date: '2.000',
            status: 'Thiếu' 
        },
        { 
            id: '', 
            name: 'Phạm Hương Giang', 
            complaint: '2.000', 
            date: '2.000',
            status: '' 
        },
        { 
            id: '', 
            name: 'Lại Văn Đại', 
            complaint: '2.000', 
            date: '2.000',
            status: 'Đủ cho 10 ngày' 
        },
        { 
            id: '', 
            name: 'Hoàng khánh Hòa', 
            complaint: '2.000', 
            date: '2.000',
            status: 'Đủ cho 20 ngày' 
        },
        { 
            id: '', 
            name: 'Nguyễn Chí Công', 
            complaint: '2.000', 
            date: '2.0005',
            status: 'Đủ cho 30 ngày' 
        },
        { 
            id: '', 
            name: 'Hà Gia Kính', 
            complaint: '2.000', 
            date: '2.0005',
            status: 'Đủ cho 15 ngày' 
        },
        { 
            id: '', 
            name: 'Phạm Hương Giang', 
            complaint: '2.000', 
            date: '2.0005',
            status: 'Đủ cho 5 ngày' 
        },
        { 
            id: '', 
            name: 'Lại Văn Đại', 
            complaint: '2.000', 
            date: '2.0005',
            status: '' 
        },
        { 
            id: '', 
            name: 'Hoàng khánh Hòa', 
            complaint: '2.000', 
            date: '2.0005',
            status: 'Thiếu' 
        },
        { 
            id: '', 
            name: 'Nguyễn Chí Công', 
            complaint: '2.000', 
            date: '2.0005',
            status: 'Đủ cho 10 ngày' 
        }
    ]
        useEffect(() => {
        if (visible) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [visible]);

    return ( 
        <div className="button-container">
            <Button 
            className="custom-vertical-button" 
            onClick={() => setVisible(true)} 
            >
            <div className="vertical-content">
                <img src={icon} alt="icon" className="button-icon-img" />
                <span className="button-title">Kho nguyên liệu</span>
            </div>
            </Button>
            <Dialog 
                visible={visible} 
                onHide={() => setVisible(false)} 
                className="storage-dialog"
                draggable={false}
                dismissableMask
            >
                <div className="header">
                    <span className="st-title">Kho nguyên liệu</span>
                    <Link to="/" className="st-link">Xem biểu đồ tồn kho</Link>
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
                    <Column field="name" header="Nguyên liệuliệu" />
                    <Column field="complaint" header="Tồn tối thiểu" />
                    <Column field="date" header="Tồn thực tếtế" />
                    <Column 
                        field="status" 
                        header="Trạng thái" 
                        body={statusBodyTemplate}
                    />  
                </DataTable>
                <LineDemo/>
                <div className="text-box">
                    <p className="text-box-title">Tóm tắt tồn kho nguyên liệu hiện tại:</p> 
                    <span className="text-box-text">Tồn nhiều nhất:</span>
                    <span className="text-box-value"> Bông Brazil (5000 kg)</span>
                    <p className="text-box-red">Tồn ít/thiếu:</p>
                </div>
            </Dialog>
        </div>
     );
}

export default Storage;