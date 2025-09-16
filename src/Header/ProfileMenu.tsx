import { Menu,  rem, Avatar, Switch } from '@mantine/core';
import {
  IconMessageCircle,
  IconUserCircle,
  IconFileText,
  IconMoon,
  IconSun,
  IconMoonStars,
  IconLogout2,
} from '@tabler/icons-react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeUser } from '../Slices/UserSlice';

const ProfileMenu=()=>{
    const profile=useSelector((state:any)=>state.profile);
    const dispatch=useDispatch();
    const user=useSelector((state:any)=>state.user)
    const [opened, setOpened] = useState(false);
    const [checked, setChecked] = useState(false);
    
    const handleLogout=()=>{
      dispatch(removeUser());
    }

  return (
    <Menu shadow="md" width={200} opened={opened} onChange={setOpened}>
      <Menu.Target>
        <div className="flex gap-2 items-center cursor-pointer hover:bg-mine-shaft-700 rounded-3xl px-2 border-t border-l border-r border-bright-sun-400">
            <div className="font-semibold animate-pulse">{user.name}</div>
            <div className="rounded-full ">
                <Avatar src={profile.picture?`data:image/jpeg;base64, ${profile.picture}`:"/avatar1.png"} alt="it's me" />
            </div>
        </div>
      </Menu.Target>

      <Menu.Dropdown onChange={()=>setOpened(true)}>
        <Menu.Label>Application</Menu.Label>
        <Link to="/profile">
          <Menu.Item leftSection={<IconUserCircle style={{ width: rem(14), height: rem(14) }} />}>
            Profile
          </Menu.Item>
        </Link>
        <Menu.Item leftSection={<IconMessageCircle style={{ width: rem(14), height: rem(14) }} />}>
          Messages
        </Menu.Item>
        <Menu.Item leftSection={<IconFileText style={{ width: rem(14), height: rem(14) }} />}>
          Resume
        </Menu.Item>
        <Menu.Item
          leftSection={<IconMoon style={{ width: rem(14), height: rem(14) }} />}
          rightSection={
            <Switch checked={checked}
            onChange={(event) => setChecked(event.currentTarget.checked)} size="md" color="dark.4" onLabel={ <IconSun
                style={{ width: rem(16), height: rem(16) }}
                stroke={2.5}
                color="yellow"
              />} offLabel={<IconMoonStars
                style={{ width: rem(16), height: rem(16) }}
                stroke={2.5}
                color="cyan"
              />} />
          }
        >
          Theme
        </Menu.Item>

        <Menu.Divider />

  
        
        <Menu.Item
        onClick={handleLogout}
          color="red"
          leftSection={<IconLogout2 style={{ width: rem(14), height: rem(14) }} />}
        >
          Logout
          
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
export default ProfileMenu;