import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import classes from './Spinner.module.scss';

const antIcon = <LoadingOutlined style={{ fontSize: 120 }} spin />;
function Spinner(): JSX.Element {
  return (
    <div className={classes['spinner']}>
      <Spin className={classes['spinner__inner']} indicator={antIcon} data-testid="spinner" />
    </div>
  );
}

export default Spinner;
