import React from 'react'
import { Grid } from '@material-ui/core'
import {
    MonetizationOn,
    AttachMoney,
    Money,
    CallMade,
    Cancel,
    Assignment,
    AllInbox,
    Bathtub,
    Done,
    PlayCircleFilledWhite,
    Stop

} from '@material-ui/icons'
import {table1, table2} from '../db/table'

import OptionBar from '../Components/OptionBar'
import FatBadge from '../Components/FatBadge'
import ThinBar from '../Components/ThinBar'
import DataTable from '../Components/DataTable'

const data = [
    {
        title: 'Start',
        value: 0,
        icon: <CallMade />
    },
    {
        title: 'Close',
        value: 0,
        icon: <Cancel />
    },
    {
        title: 'Total Order',
        value: 0,
        icon: <AllInbox />
    },
    {
        title: 'Order',
        value: 0,
        icon: <Assignment />
    },
    {
        title: 'Customer',
        value: 0,
        icon: <Bathtub />
    },
    {
        title: 'Delivered',
        value: 0,
        icon: <Done />
    },
    {
        title: 'Total Order (Start)',
        value: 0,
        icon: <PlayCircleFilledWhite />
    },
    {
        title: 'Total Order (Close)',
        value: 0,
        icon: <Stop />
    }
]

const Overall = () => {
    return (
        <>
            <OptionBar />
            <Grid
                container
                spacing={2}
                style={{ marginTop: 10 }}
            >
                <Grid item xs={12} sm={12} md={5}>
                    <Grid
                        container
                        spacing={2}
                        justify='center'
                    >
                        <Grid
                            item
                            xs={12}
                            sm={12}
                            md={12}
                        >
                            <FatBadge
                                primary
                                title='Total Sale'
                                icon={<MonetizationOn />}
                                value={999}
                            />
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={12}
                            md={6}
                        >
                            <FatBadge
                                title='Revenue'
                                icon={<AttachMoney />}
                                value={999}
                            />
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={12}
                            md={6}
                        >
                            <FatBadge
                                title='Income'
                                icon={<Money />}
                                value={999}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={7}>
                    <Grid
                        container
                        spacing={2}
                        justify='center'
                        alignItems='center'
                    >
                        {
                            data.map(item => (
                                <Grid
                                    item
                                    xs={12}
                                    sm={6}
                                    md={6}
                                >
                                    <ThinBar
                                        title={item.title}
                                        value={item.value}
                                        icon={item.icon}
                                    />
                                </Grid>
                            ))
                        }
                    </Grid>
                </Grid>
            </Grid>
            <Grid
                container
                spacing={2}
                justify='center'
                alignItems='center'
            >
                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={6}
                >
                    <DataTable data={table1} />
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={6}
                >
                    <DataTable data={table2} />
                </Grid>
            </Grid>
        </>
    )
}

export default Overall
