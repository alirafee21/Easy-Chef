import * as React from 'react';
import { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import './CartRecipeTable.css';
import MultipleSelectNative from './MultipleSelectNative/MultipleSelectNative';
import VirtualizedList from './MultipleSelectNative/MultipleSelectNative';
import renderRow from './MultipleSelectNative/MultipleSelectNative';
function CartRecipeTable(props) {
    const columns = [
        // { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'image',
            width: 150,
            headerName: 'Images',
            editable: false
        },
        {
            field: 'recipeName',
            headerName: 'Recipes',
            width: 150,
            editable: false
        },
        {
            field: 'ingredients',
            headerName: 'Ingredients',
            renderCell: (params) => {
                return <VirtualizedList ingredients={params.row.ingredients} itemSize={44} />;
            },
            width: 150,
            editable: false
        },
        {
            field: 'quantity',
            headerName: 'Qty',
            type: 'number',
            width: 110,
            editable: false
        },
        {
            field: 'price',
            headerName: 'Prices',
            width: 160,
            editable: false
        },
        {
            field: 'action',
            headerName: 'Action',

            sortable: false,
            width: 160
        }
    ];

    return (
        <Box sx={{ height: 800, width: '100%' }}>
            <DataGrid
                rows={props.rows}
                columns={columns}
                rowHeight={120}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5
                        }
                    }
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
            />
        </Box>
    );
}

export default CartRecipeTable;
