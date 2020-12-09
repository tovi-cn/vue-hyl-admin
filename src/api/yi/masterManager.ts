import { GetListParams, ResultList } from '../model/baseModel';
import { defHttp } from '/@/utils/http/axios';

enum Api {
  MASTER_INFO_PAGE = '/yi/user/MasterInfoPage', // 大师信息分页查询
  MASTER_INFO_FULL_GET = '/yi/user/MasterInfoFullGet', // 获取大师全部信息 详情
  MASTER_INFO_APPLY_PAGE = '/yi/user/MasterInfoApplyPage', // 大师申请分页查询
  MASTER_INFO_APPLY_AUDIT = '/yi/user/MasterInfoApplyAudit', // 审批大师申请
  MASTER_SET_ENABLE = '/yi/user/MasterSetEnable', // 启用或停用某大师
}

export interface MasterInfo {
  bad_rate: number;
  best_rate: number;
  brief: string;
  created_at: string;
  enabled: number;
  icon: string;
  id: number;
  level: number;
  mid_rate: number;
  nick: string;
  order_total: number;
  rate: number;
  rebate: number;
  sign_date: string;
  uid: number;
  update_at: string;
  user_code: string;
  ver: number;
}

/**
 * @description: 获取大师列表
 */
export function masterInfoList(params: GetListParams<MasterInfo>) {
  return defHttp.request<ResultList<MasterInfo>>({
    url: Api.MASTER_INFO_PAGE,
    method: 'POST',
    params,
  });
}