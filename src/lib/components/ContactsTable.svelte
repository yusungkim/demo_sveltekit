<script lang="ts">
  import type { Contacts } from "src/routes/contacts/+page.server";
	import { enhance } from '$app/forms';

	export let contacts: Contacts = [];
</script>

<div class="overflow-x-auto w-full mt-6">
	<table class="table w-full">
		<!-- head -->
		<thead class="bg-gray-100 h-12">
			<tr>
				<th>
					<label>
						<input type="checkbox" class="checkbox" />
					</label>
				</th>
				<th>Name</th>
				<th>Job</th>
				<th>Email</th>
				<th />
			</tr>
		</thead>
		<tbody>
			{#each contacts as contact}
				<tr class="h-16">
					<th>
						<label>
							<input type="checkbox" class="checkbox" />
						</label>
					</th>
					<td>
						<div class="flex items-center space-x-3">
							<div class="avatar">
								<div class="w-12 h-12 rounded-lg overflow-hidden">
									<img src="https://i.pravatar.cc/150?u={contact.name}" alt={contact.name} />
								</div>
							</div>
							<div>
								<div class="font-bold">{contact.name}</div>
							</div>
						</div>
					</td>
					<td>
						{contact.company}
						<br />
						<span class="badge badge-ghost badge-sm">{contact.job}</span>
					</td>
					<td>{contact.email}</td>
					<th>
						<form method="POST" action="?/delete" use:enhance>
							<input name="id" type="hidden" hidden value={contact.id} />
							<button class="bg-red-400 rounded-md p-1 px-2 text-slate-100 hover:bg-red-500">Delete</button>
						</form>
					</th>
				</tr>
			{/each}
		</tbody>
		<!-- foot -->
		<tfoot class="bg-gray-100 h-12">
			<tr>
				<th />
				<th>Name</th>
				<th>Job</th>
				<th>Email</th>
				<th />
			</tr>
		</tfoot>
	</table>
</div>
