const e={label:"Field Distribution",tip:"Only the first 10 fields are shown, sorted by distribution",subtitle:"Click me to go for official docs about “Field Distribution”"},t="Count",i="Indexing",n="This index is indexing documents, setting & search results may be incorrect now!",o={dialog:{content:`You are <strong>deleting all documents</strong> of index <strong>{{uid}}</strong>.
This action is so important that you are required to confirm it.
Please click one of these buttons to proceed.`,title:"Please confirm your action"},label:"Delete All Documents"},s={dialog:{content:`You are <strong>deleting index {{uid}}</strong>.
This action is so important that you are required to confirm it.
Please click one of these buttons to proceed.`,title:"Please confirm your action"},label:"Delete This Index"},r="Primary Key",a="Index Not Found",l={index:{config:{label:"Index Configuration"},danger_zone:"Danger Zone"},filterableAttributes:"Filterable Attributes",searchableAttributes:"Searchable Attributes",sortableAttributes:"Sortable Attributes"},d={tip:"Only the data presented on this page is searched here because Meilisearch does not provide a search interface for index lists!"},c={fieldDistribution:e,count:t,indexing:i,indexing_tip:n,all_documents_delete:o,index_delete:s,primaryKey:r,not_found:a,setting:l,search:d};export{o as all_documents_delete,t as count,c as default,e as fieldDistribution,s as index_delete,i as indexing,n as indexing_tip,a as not_found,r as primaryKey,d as search,l as setting};