<template>
  <div class="container-fluid">
    <div class="fade-in">
      <div class="row">
        <div class="col-lg-12">
          <div class="card">
            <div class="card-header">Incident Overview</div>
            <div class="card-body">
              <table class="table table-hover table-bordered">
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
                    <td>{{ incident.device }}</td>
                    <td>{{ incident.name }}</td>
                    <td>{{ incident.start_time }}</td>
                    <td>{{ incident.stop_time }}</td>
                    <td>{{ incident.status }}</td>
                    <td>
                      <button class="btn btn-primary">Resolve</button>
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
  name: 'Home',
  layout: 'AppLayout',
  setup() {
    const incidents = ref([])

    onMounted(async () => {
      try {
        const response = await api.get('/incident')
        incidents.value = response.data.data
      } catch (err) {
        console.log(err)
      }
    })

    return { incidents }
  },
};
</script>
