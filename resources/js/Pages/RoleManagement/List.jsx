import React, { useMemo } from 'react';
import AuthLayout from '../../Layouts/AuthLayout';
import { Card, CardBody } from '../../components/Card';
import AuthorizeLink from '../../components/AuthorizeLink';
import ConfirmDelete from '../../components/ConfirmDelete';
import TableTopBar from '../../components/TableTopBar';
import { Head } from '@inertiajs/react';
import TableFactory from '../../Factory/Table/TableFactory';

function List({ roles, roleCount }) {
  const columns = useMemo(() => [
    { header: '#', accessor: 'id' },
    { header: 'Name', accessor: 'name' },
    { header: 'Users', accessor: 'users' },
    { header: 'Created At', accessor: 'created_at' },
    {
      header: 'Action', accessor: null, render: (role) => (
        <div key={role.id} className="d-flex flex-no-wrap gap-2">
          <AuthorizeLink
            className="btn btn-sm btn-soft-success"
            ability='role.index'
            href={route('role.show', role.id)}
          >
            <i className="bx bxs-show font-size-16 align-middle"></i>
          </AuthorizeLink>

          <AuthorizeLink
            className="btn btn-sm btn-soft-primary"
            ability='role.edit'
            href={route('role.edit', role.id)}
          >
            <i className="bx bxs-edit font-size-16 align-middle"></i>
          </AuthorizeLink>

          <ConfirmDelete
            ability='role.delete'
            url={route('role.destroy', role.id)}
            btnClass='btn btn-sm btn-soft-danger'
            btnLabel={<i className="bx bxs-trash font-size-16 align-middle"></i>}
          />
        </div>
      )
    }
  ], []);

  return (
    <AuthLayout>
      <Head title='Role List - ' />
      <Card>
        <CardBody>
          <TableTopBar
            title="Role List"
            subTitle='View and Manage Roles'
            count={roleCount}
            url={route('role.create')}
            ability="role.create"
          />
          <TableFactory
            columns={columns}
            dataSource={roles}
            url={route('role.index')}
          />
        </CardBody>
      </Card>
    </AuthLayout>
  );
}

export default List;
