import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit';
import rowService from '../../services/rows.services';
import cellService from '../../services/cells.services';
import rowAuditTrailService from '../../services/rowAuditTrail.services';
// ----------------------------------------------------------------------
const initialState = { rows: {}, selectedWidegtId: null };
const name = 'rows';
export const selectSelf = (state) => state.rows;
export const selectMain = (state) => state.rows;
const findRowById = (data, id) => {
  // eslint-disable-next-line no-restricted-syntax
  for (const widgetId in data.rows) {
    if (widgetId || Number(widgetId) === 0) {
      const { rows } = data.rows[widgetId];
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < rows.length; i += 1) {
        if (rows[i].id === id) {
          return { widgetId, row: rows[i], index: i };
        }
      }
    }
  }
  return { widgetId: null, row: null, index: null };
};
const findRowByIdforAllWidgets = (data, id) => {
  const rowsData = [];
  const dataRows = JSON.parse(JSON.stringify(data.rows));
  // eslint-disable-next-line no-restricted-syntax
  for (const widgetId in dataRows) {
    if (widgetId) {
      const { rows } = dataRows[widgetId];
      for (let i = 0; i < rows.length; i += 1) {
        if (rows[i].id === id) {
          rowsData.push({ widgetId, row: rows[i], index: i });
        }
      }
    }
  }
  return rowsData;
};
const findWidgetIdsByFieldTypeId = (data, id) => {
  const widgetIds = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const widgetId in data.rows) {
    if (widgetId) {
      const { rows } = data.rows[widgetId] || { rows: [] };
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < rows.length; i++) {
        if (rows[i].fieldTypeId === id) {
          widgetIds.push(widgetId);
          break;
        }
      }
    }
  }
  return widgetIds;
};
export const selectRowById = createSelector(
  selectSelf,
  (_state, id) => Number(id),
  (state, id) => {
    const { row } = findRowById(state, id);
    if (row) {
      return row;
    }
    return {};
  }
);
export const selectRowsByWidgetId = createSelector(
  selectSelf,
  (_state, id) => Number(id),
  (state, id) => state.filter((item) => item.widgetId === id && item.parentId === null) || []
);
export const selectTotalRowCount = createSelector(selectMain, (state) => state.totalCount);
export const selectRowsByFieldTypeId = createSelector(
  [selectSelf, (_state, widgetId) => Number(widgetId)],
  (state, widgetId) => {
    if (state.rows && state.rows[widgetId]) {
      return {
        rows: state.rows[widgetId].rows || [],
        totalCount: state.rows[widgetId].totalCount,
        pagination: state.rows[widgetId].pagination,
      };
    }
    return { rows: [], totalCount: 0, pagination: {} };
  }
);
export const selectChildRowsByRowId = createSelector(
  [selectSelf, (_state, widgetId) => Number(widgetId), (_state, _widgetId, parentId) => Number(parentId)],
  (state, widgetId, parentId) =>
    widgetId && parentId
      ? state.rows[widgetId].rows.filter((item) => Number(item.parentId) === Number(parentId)) || []
      : []
);
export const createRow = createAsyncThunk(`${name}/createRowDataStatus`, async (data, { rejectWithValue }) => {
  const response = await rowService.createRow(data);
  if (response.status !== 200) {
    return rejectWithValue(response.message);
  }
  return response.data;
});
export const fetchRowsByFieldTypeId = createAsyncThunk(
  `${name}/fetchRowsByFieldTypeIdDataStatus`,
  async (data, { rejectWithValue }) => {
    const response = await rowService.fetchRowsByFieldTypeId(data);
    if (response.status !== 200) {
      return rejectWithValue(response.message);
    }
    return { ...response.data, pagination: { ...data.pagination, isChanged: false } };
  }
);
export const fetchChildRowsByRowId = createAsyncThunk(
  `${name}/fetchChildRowsByRowIdDataStatus`,
  async (data, { rejectWithValue }) => {
    const response = await rowService.fetchChildRowsByRowId(data);
    if (response.status !== 200) {
      return rejectWithValue(response.message);
    }
    return response.data;
  }
);
export const fetchRow = createAsyncThunk(`${name}/fetchRowDataStatus`, async (data, { rejectWithValue }) => {
  const response = await rowService.fetchRow(data);
  if (response.status !== 200) {
    return rejectWithValue(response.message);
  }
  return response.data;
});
export const updateRow = createAsyncThunk(`${name}/updateRowDataStatus`, async (data, { rejectWithValue }) => {
  const response = await rowService.updateRow(data);
  if (response.status !== 200) {
    return rejectWithValue(response.message);
  }
  return response.data;
});
export const deleteRow = createAsyncThunk(`${name}/deleteRowDataStatus`, async (data, { rejectWithValue }) => {
  const response = await rowService.deleteRow(data);
  if (response.status !== 200) {
    return rejectWithValue(response.message);
  }
  return response.data;
});
export const createRowCell = createAsyncThunk(`${name}/createRowCellDataStatus`, async (data, { rejectWithValue }) => {
  const response = await cellService.createCell(data);
  if (response.status !== 200) {
    return rejectWithValue(response.message);
  }
  return response.data;
});
export const updateRowCell = createAsyncThunk(`${name}/updateRowCellDataStatus`, async (data, { rejectWithValue }) => {
  const response = await cellService.updateCell(data);
  if (response.status !== 200) {
    return rejectWithValue(response.message);
  }
  return response.data;
});
export const deleteRowCell = createAsyncThunk(`${name}/deleteRowCellDataStatus`, async (data, { rejectWithValue }) => {
  const response = await cellService.deleteCell(data);
  if (response.status !== 200) {
    return rejectWithValue(response.message);
  }
  return response.data;
});
export const getCellArray = (d, cells) => {
  const cellJson = [];
  // eslint-disable-next-line no-restricted-syntax, guard-for-in
  for (const prop in cells) {
    cellJson.push({
      rowId: d,
      value: cells[prop],
      fieldUuid: prop,
    });
  }
  return cellJson;
};
export const createRowAuditTrail = async (data) => {
  await rowAuditTrailService.createAuditTrail(data);
};
const dataTypesSlice = createSlice({
  name,
  initialState,
  reducers: {
    setSelectedWidget(state, action) {
      state.selectedWidegtId = action.payload;
    },
    refetchDatForSelectedWidget(state, action) {
      const widgetId = action.payload;
      if (state.rows[widgetId])
        state.rows[widgetId].pagination = { ...state.rows[widgetId].pagination, isChanged: true };
    },
    refetchDatForCurrentWidget(state, action) {
      const widgetId = state.selectedWidegtId;
      if (widgetId && state.rows[widgetId])
        state.rows[widgetId].pagination = { ...state.rows[widgetId].pagination, isChanged: true };
    },
  },
  extraReducers: {
    [createRowCell.fulfilled]: (state, action) => {
      const { rowId } = action.payload;
      const { index: itemIndex, widgetId } = findRowById(state, rowId);
      if (itemIndex !== -1) {
        state.rows[widgetId].rows[itemIndex].cells.push(action.payload);
      }
    },
    [updateRowCell.fulfilled]: (state, action) => {
      const { id, cells } = action.payload;
      const filteredRows = findRowByIdforAllWidgets(state, id);
      for (let i = 0; i < filteredRows.length; i += 1) {
        const { index: itemIndex, widgetId } = filteredRows[i];
        if (itemIndex !== -1) {
          state.rows[widgetId].rows[itemIndex].cells = cells;
        }
      }
    },
    [deleteRowCell.fulfilled]: (state, action) => {
      const { rowId, id } = action.payload;
      const { index: itemIndex, widgetId } = findRowById(state, rowId);
      if (itemIndex !== -1) {
        state.rows[widgetId].rows[itemIndex].cells.filter((cell) => cell.id !== id);
      }
    },
    [createRow.fulfilled]: (state, action) => {
      const widgetIds = findWidgetIdsByFieldTypeId(state, action.payload.fieldTypeId);
      if (widgetIds && widgetIds.length === 0 && state.selectedWidegtId) {
        state.rows[state.selectedWidegtId].rows.push({
          ...action.payload,
        });
        if (!action.payload.parentId) state.rows[state.selectedWidegtId].totalCount += 1;
      }
      for (let i = 0; i < widgetIds.length; i += 1) {
        const widgetId = widgetIds[i];
        state.rows[widgetId].rows.push({
          ...action.payload,
        });
        if (!action.payload.parentId) state.rows[widgetId].totalCount += 1;
      }
    },
    [fetchRowsByFieldTypeId.fulfilled]: (state, action) => {
      const { rows, totalCount, widgetId, pagination } = action.payload || { rows: [], totalCount: 0, widgetId: null };
      if (widgetId && widgetId in state.rows) {
        state.rows[widgetId] = {
          rows,
          totalCount,
          pagination,
          widgetId,
        };
      } else {
        state.rows = {
          ...state.rows,
          [widgetId]: {
            rows,
            totalCount,
            widgetId,
            pagination,
          },
        };
      }
    },
    [fetchChildRowsByRowId.fulfilled]: (state, action) => {
      if (action.payload && Array.isArray(action.payload) && action.payload.length)
        state.rows[state.selectedWidegtId].rows.push(...action.payload);
    },
    [fetchRow.fulfilled]: (state, action) => {
      const { id } = action.payload;
      const { index: itemIndex, widgetId } = findRowById(state, id);
      // handle configuration page refresh scenario
      if (!itemIndex && !widgetId) {
        if (Array.isArray(state.rows[0]?.rows)) {
          state.rows[0].rows.push(action.payload);
        } else {
          state.rows[0] = { ...state.rows[0], rows: [action.payload] };
        }
      } else {
        // eslint-disable-next-line no-lonely-if
        if (itemIndex !== -1) {
          state.rows[widgetId].rows[itemIndex] = action.payload;
        } else {
          state.rows[widgetId].rows.push(action.payload);
        }
      }
    },
    [updateRow.fulfilled]: (state, action) => {
      const { id } = action.payload;
      const { index: itemIndex, widgetId } = findRowById(state, id);
      if (itemIndex !== -1) {
        state.rows[widgetId].rows[itemIndex] = action.payload;
      }
    },
    [deleteRow.fulfilled]: (state, action) => {
      const { id } = action.payload;
      const filteredRows = findRowByIdforAllWidgets(state, id);
      if (Array.isArray(filteredRows) && filteredRows.length > 0) {
        for (let i = 0; i < filteredRows.length; i += 1) {
          const { widgetId } = filteredRows[i];
          state.rows[widgetId].rows = state.rows[widgetId].rows.filter((item) => item.id !== id);
          if (!action.payload.parentId) state.rows[widgetId].totalCount -= 1;
        }
      }
    },
  },
});
const { reducer, actions } = dataTypesSlice;



// Reducer
export default reducer;
export const { setSelectedWidget, refetchDatForSelectedWidget, refetchDatForCurrentWidget } = actions;
import axios from '../utils/axios';
const fetchRowsByFieldTypeId = ({ fieldTypeId, widgetId, pagination, itemId }) =>
  axios
    .get(`/row/fieldType/${fieldTypeId}/widget/${widgetId}`, {
      params: {
        page: pagination.page || 1,
        limit: pagination.limit || 10,
        orderBy: pagination.orderBy || '',
        orderByField: pagination.orderByField || '',
        q: pagination.q || '',
        itemId,
      },
    })
    .then(
      (response) => response,
      (error) => error
    );
    
const fetchExcelRowsByFieldTypeId = ({ fieldTypeId, widgetId, pagination, itemId }) =>
  axios
    .get(`/row/excel/fieldType/${fieldTypeId}/widget/${widgetId}`, {
      params: {
        page: pagination.page ?? 1,
        limit: pagination.limit ?? 500,
        orderBy: pagination.orderBy ?? '',
        orderByField: pagination.orderByField ?? '',
        itemId,
      },
    })
    .then(
      (response) => response,
      (error) => error
    );
const fetchChildRowsByRowId = ({ rowId }) =>
  axios.get(`/row/parent/${rowId}`).then(
    (response) => response,
    (error) => error
  );
const fetchRow = ({ rowId }) =>
  axios.get(`/row/${rowId}`).then(
    (response) => response,
    (error) => error
  );
const createRow = (data) =>
  axios.post('/row', data).then(
    (response) => response,
    (error) => error
  );
const generateRows = (data) =>
  axios.post('/row/generate-random', data).then(
    (response) => response,
    (error) => error
  );
const updateRow = ({ rowId, ...data }) =>
  axios.patch(`/row/${rowId}`, data).then(
    (response) => response,
    (error) => error
  );
const deleteRow = ({ rowId }) =>
  axios.delete(`/row/${rowId}`).then(
    (response) => response,
    (error) => error
  );
const createAuditLog = (data) =>
  axios.post(`/row/audit-log`, data).then(
    (response) => response,
    (error) => error
  );
const rowService = {
  fetchRowsByFieldTypeId,
  fetchExcelRowsByFieldTypeId,
  fetchChildRowsByRowId,
  fetchRow,
  createRow,
  generateRows,
  updateRow,
  deleteRow,
  createAuditLog,
};
export default rowService;

import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';



// slices
import pagesReducer from './slices/pages.slice';
import widgetsReducer from './slices/widgets.slice';
import fieldTypeReducer from './slices/fieldType.slice';
import rowsReducer from './slices/rows.slice';
import tabsWidgetReducer from './slices/tabsWidget.slice';
import tabsWidgetRowReducer from './slices/tabsWidgetRow.slice';
import layoutReducer from './slices/layout.slice';
import partnerReducer from './slices/partner.slice';
import internalUsersReducer from './slices/internalUsers.slice';
import groupsReducer from './slices/groups.slice';
import groupMembersReducer from './slices/groupMembers.slice';
import productsReducer from './slices/products.slice';
import chatReducer from './slices/chat.slice';
import calendarReducer from './slices/calendar.silce.';
import kanbanReducer from './slices/kanban.slice';
import dictionariesReducer from './slices/dictionaries.slice';
import paymentReducer from './slices/payment.slice';
import cellDataReducer from './slices/cellData.slice';
import historyReducer from './slices/history.slice';
import globalLookupReducer from './slices/globalLookup.slice';
import taskReducer from './slices/task.slice';
import userPermissionReducer from './slices/userPermission.slice';
import authReducer from './slices/auth.slice';
import workflowTasksReducer from './slices/workflowTasks.slice';
import documentTemplateReducer from './slices/documentTemplate.slice';
import questionFormReducer from './slices/questionForm.slice';
import documentsReducer from './slices/documents.slice';
// ----------------------------------------------------------------------
const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',
  whitelist: ['dictionaries'],
};
const rootReducer = combineReducers({
  pages: pagesReducer,
  widgets: widgetsReducer,
  fieldType: fieldTypeReducer,
  rows: rowsReducer,
  layout: layoutReducer,
  tabsWidget: tabsWidgetReducer,
  tabs: tabsWidgetRowReducer,
  partner: partnerReducer,
  products: productsReducer,
  internalUsers: internalUsersReducer,
  groups: groupsReducer,
  groupMembers: groupMembersReducer,
  chat: chatReducer,
  calendar: calendarReducer,
  kanban: kanbanReducer,
  dictionaries: dictionariesReducer,
  payment: paymentReducer,
  cellData: cellDataReducer,
  history: historyReducer,
  globalLookup: globalLookupReducer,
  task: taskReducer,
  userPermission: userPermissionReducer,
  auth: authReducer,
  workflowTasks: workflowTasksReducer,
  documentTemplate: documentTemplateReducer,
  questionForm: questionFormReducer,
  documents: documentsReducer,
});
export { rootPersistConfig, rootReducer };

import axios from 'axios';


// config
import { HOST_API } from '../config';
// ----------------------------------------------------------------------
const axiosInstance = axios.create({
  baseURL: HOST_API,
});
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

export const axiosMockInstance = axios.create({
  baseURL: 'https://minimal-assets-api-dev.vercel.app',
});
axiosMockInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);
export default axiosInstance;