<?php

namespace Database\Seeders;

use App\Models\PermissionGroup;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;

class PermissionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $roleGroup = PermissionGroup::create(['name' => "Role management"]);
        Permission::create(['name' => 'role.index', 'permission_group_id' => $roleGroup->id]);
        Permission::create(['name' => 'role.create', 'permission_group_id' => $roleGroup->id]);
        Permission::create(['name' => 'role.edit', 'permission_group_id' => $roleGroup->id]);
        Permission::create(['name' => 'role.delete', 'permission_group_id' => $roleGroup->id]);

        $userGroup = PermissionGroup::create(['name' => "User management"]);
        Permission::create(['name' => 'user.index', 'permission_group_id' => $userGroup->id]);
        Permission::create(['name' => 'user.create', 'permission_group_id' => $userGroup->id]);
        Permission::create(['name' => 'user.edit', 'permission_group_id' => $userGroup->id]);
        Permission::create(['name' => 'user.delete', 'permission_group_id' => $userGroup->id]);
    }
}
