import React, { useMemo } from 'react';
import AuthLayout from '../../Layouts/AuthLayout';
import { Head } from '@inertiajs/react';
import Badge from '../../components/Badge';
import { Card, CardBody } from '../../components/Card';
import TableTopBar from '../../components/TableTopBar';
import AuthorizeLink from '../../components/AuthorizeLink';
import ConfirmDelete from '../../components/ConfirmDelete';
import TableFactory from '../../Factory/Table/TableFactory';

const List = React.memo(({ users, userCount }) => {
    const columns = useMemo(() => [
        { header: '#', accessor: 'id' },
        { header: 'Name', accessor: 'name' },
        { header: 'Email', accessor: 'email' },
        { header: 'Role', accessor: 'name' },
        {
            header: 'Status', accessor: 'is_active', render: (row) => (
                <Badge className={`rounded-pill font-size-12 fw-medium ${row.is_active ? ' bg-success-subtle text-success' : ' bg-danger-subtle text-danger'}`}>
                    {row.is_active ? "Active" : "Inactive"}
                </Badge>
            )
        },
        { header: 'Created At', accessor: 'created_at' },
        {
            header: 'Action', accessor: null, render: (user) => (
                <div className="d-flex flex-no-wrap gap-2">
                    <AuthorizeLink
                        className="btn btn-sm btn-soft-success"
                        ability='user.index'
                        href={route('user.show', user.id)}
                    >
                        <i className="bx bxs-show font-size-16 align-middle"></i>
                    </AuthorizeLink>

                    <AuthorizeLink
                        className="btn btn-sm btn-soft-primary"
                        ability='user.edit'
                        href={route('user.edit', user.id)}
                    >
                        <i className="bx bxs-edit font-size-16 align-middle"></i>
                    </AuthorizeLink>

                    <ConfirmDelete
                        ability='user.delete'
                        url={route('user.destroy', user.id)}
                        btnClass='btn btn-sm btn-soft-danger'
                        btnLabel={<i className="bx bxs-trash font-size-16 align-middle"></i>}
                    />
                </div>
            )
        }
    ], []);

    return (
        <AuthLayout>
            <Head title='User List - ' />

            <Card>
                <CardBody>
                    <TableTopBar
                        title="User List"
                        subTitle='View and Manage Users'
                        count={userCount}
                        url={route('user.create')}
                        ability={"user.create"}
                    />

                    <TableFactory
                        columns={columns}
                        dataSource={users}
                        url={route('user.index')}
                    />
                </CardBody>
            </Card>
        </AuthLayout>
    );
});

export default List;
