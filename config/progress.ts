// let i = 0
declare const TcGridUtil: any;
declare const TcGridView: any;
declare const TcGridTable: any;
declare const dojo: any;
// TcGridTable.DataGrid.grid && TcGridTable.DataGrid.grid.parentElement && (i = TcGridTable.DataGrid.grid.parentElement.scrollTop);
r = TcGridUtil.CopyRow(TcGridView.ProcessedServerResponse.items[TcGridUtil.StoreItemLocation(TcGridView.ProcessedServerResponse.items, 1)], !0, !1);
r.WeekNumber = TcGridUtil.IdentifyWeekNumber(r.InDate);
TcGridView.ProcessedServerResponse.items.splice(TcGridUtil.StoreItemLocation(TcGridView.ProcessedServerResponse.items, 1) + 1, 0, r);
// TcGridUtil.isSimpleTimeSheet || (TcGridUtil.ResetStoreArrayPositions(), TcGridUtil.CreateDTORecordXReferences());
dojo.destroy(TcGridTable.DataGrid.grid);
TcGridUtil.renderNewAndAdjustLayout();
// TcGridTable.DataGrid.grid && TcGridTable.DataGrid.grid.parentElement && i != "0" &&
//   (TcGridTable.DataGrid.grid.parentElement.scrollTop = i);

var s, r, f, u, e;
s = 0;
r = dojo.clone(TcGridView.ProcessedServerResponse.items[TcGridUtil.StoreItemLocation(TcGridView.ProcessedServerResponse.items, n.id)]);
r.PayDate = TLMJS.IsDate(r.PayDate) ? new Date(r.PayDate.valueOf() + 864e5) : null;
r.InDate = TLMJS.IsDate(r.InDate) ? new Date(r.InDate.valueOf() + 864e5) : null;
r.OutDate = TLMJS.IsDate(r.OutDate) ? new Date(r.OutDate.valueOf() + 864e5) : null;
f = TcGridUtil.CopyRow(r, !0, !0);
f.WeekNumber = TcGridUtil.IdentifyWeekNumber(f.InDate);
u = TLMJS.IsDate(r.PayDate) ? TcGridUtil.TimePairsPerDay[TcGridUtil.GetYMDdtStringFromJson(f.PayDate)] : null;
var h = !1, o = 0, c = TLMJS.IsDate(f.InTime) ? f.InTime.valueOf() : 0;
for (t = 0, tL = u.length; t < tL; t++)
  if (e = TcGridUtil.GetTimePairById(u[t]), e.RecordType == TcGridUtil.RecordTypes.DatePlaceholder) {
    h = !0, f.id = e.id, o = TcGridUtil.StoreItemLocation(TcGridView.ProcessedServerResponse.items, e.id),
      TcGridView.ProcessedServerResponse.items.splice(o, 1, f);
    break
  }
if (!h) {
  for (t = 0, tL = u.length; t < tL; t++)
    if (e = TcGridUtil.GetTimePairById(u[t]), TLMJS.isEmpty(e.InTime) || c < e.InTime.valueOf()) {
      h = !0,
        o = TcGridUtil.StoreItemLocation(TcGridView.ProcessedServerResponse.items, e.id) + (TLMJS.isEmpty(e.InTime) ? 1 : 0);
      break
    }
  h || (o = TcGridUtil.StoreItemLocation(TcGridView.ProcessedServerResponse.items, u[u.length - 1]) + 1),
    TcGridView.ProcessedServerResponse.items.splice(o, 0, f)
}
TcGridUtil.ResetStoreArrayPositions();
TcGridUtil.CreateDTORecordXReferences();
dojo.destroy(TcGridTable.DataGrid.grid);
TcGridUtil.renderNewAndAdjustLayout();




let TLMJS: any;
let m;
let pos;

m = 5;
r = dojo.clone(TcGridView.ProcessedServerResponse.items[TcGridUtil.StoreItemLocation(TcGridView.ProcessedServerResponse.items, 1)]);
r.PayDate = TLMJS.IsDate(r.PayDate) ? new Date(r.PayDate.valueOf() + 864e5 * m) : null;
r.InDate = TLMJS.IsDate(r.InDate) ? new Date(r.InDate.valueOf() + 864e5 * m) : null;
r.OutDate = TLMJS.IsDate(r.OutDate) ? new Date(r.OutDate.valueOf() + 864e5 * m) : null;
f = TcGridUtil.CopyRow(r, !0, !0);
f.WeekNumber = TcGridUtil.IdentifyWeekNumber(f.InDate);
pos = TcGridUtil.StoreItemLocation(TcGridView.ProcessedServerResponse.items, 1) + 1;
TcGridView.ProcessedServerResponse.items.splice(pos, 0, f);
TcGridUtil.ResetStoreArrayPositions();
TcGridUtil.CreateDTORecordXReferences();
dojo.destroy(TcGridTable.DataGrid.grid);
TcGridUtil.renderNewAndAdjustLayout();