<template>
  <div class="container-fluid">
    <div class="fade-in">
      <div class="row">
        <div class="col-lg-12 radius">
          <div class="card">
            <div class="title-header row">
              <div class="col-sm-10">
                <h4>
                  <b>Incidents</b>
                </h4>
              </div>
              <div class="col-sm-2" style="text-align:right">
                <button type="button" class="btn btn-pill btn-outline-success">
                  <i class="cil-reload"></i>
                </button>
              </div>
            </div>
            <div class="card-body">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Severity</th>
                    <th>Category</th>
                    <th>Device</th>
                    <th>Name</th>
                    <th>Start Time</th>
                    <th>Stop Time</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="incident in incidents" :key="incident.id">
                    <td>{{ incident.id }}</td>
                    <td>{{ incident.severity }}</td>
                    <td>{{ incident.category }}</td>
                    <td>
                      <pre class="normal">{{ incident.device }}</pre>
                    </td>
                    <td>{{ incident.name }}</td>
                    <td>{{ incident.start_time }}</td>
                    <td>{{ incident.stop_time }}</td>
                    <td v-if="incident.status === 'Resolved'">
                      <span style="color:green">{{ incident.status }}</span>
                    </td>
                    <td v-else>
                      <span style="color:red">{{ incident.status }}</span>
                    </td>

                    <td>
                      <i
                        v-if="incident.status === 'Unresolved'"
                        class="cil-check click"
                        style="color:green"
                        @click="updateIncidents(incident.id)"
                      ></i>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import api from '@/api'

export default {
  name: 'Incidents',
  layout: 'AppLayout',
  setup() {
    const incidents = ref([])

    const title = "Incidents"

    const loadIncidents = async () => {
      try {
        const response = await api('/incident')
        incidents.value = response.data.data
      } catch (err) {
        console.log(err)
      }
    }

    const updateIncidents = async (id) => {
      try {
        await api(`/incident?id=${id}&resolve=1`)
        loadIncidents()
      } catch (err) {
        console.log(err)
      }
    }

    onMounted(async () => {
      await loadIncidents()
    })

    return { incidents, updateIncidents, title }
  },
};
</script>
