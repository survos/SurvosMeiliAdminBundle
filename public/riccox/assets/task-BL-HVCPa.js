const e="Duration",t="Enqueued At",n="Started At",a="Finished At",d={placeholder:"Search tasks"},i={index:{placeholder:"Filter Index UID"},enqueuedAt:{label:"Enqueued At"},type:{placeholder:"Filter Task Type"},status:{placeholder:"Filter Task Status"}},s={documentAdditionOrUpdate:"Document Addition Or Update",documentDeletion:"Document Deletion",dumpCreation:"Dump Creation",indexCreation:"Index Creation",indexDeletion:"Index Deletion",indexSwap:"Index Swap",indexUpdate:"Index Update",settingsUpdate:"Settings Update",snapshotCreation:"Snapshot Creation",taskCancelation:"Task Cancelation",taskDeletion:"Task Deletion"},o={succeeded:"✅ Succeeded",processing:"⚡ Processing",failed:"❌ Failed",enqueued:"🔀 Enqueued",canceled:"🚫 Canceled"},c={title:"Task Detail"},l={duration:e,enqueued_at:t,started_at:n,finished_at:a,search:d,filter:i,type:s,status:o,detail:c};export{l as default,c as detail,e as duration,t as enqueued_at,i as filter,a as finished_at,d as search,n as started_at,o as status,s as type};