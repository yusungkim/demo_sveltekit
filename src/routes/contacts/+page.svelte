<script lang="ts">
	import { enhance, applyAction } from '$app/forms';
	import ContactsTable from '$lib/components/ContactsTable.svelte';
	import Alert from '../../lib/components/Alert.svelte';
  import type { ContactReturnType, Contacts } from './+page.server';

	export let data: { contacts: Contacts };
	export let form: ContactReturnType;
	$: console.log("form: ", form);

</script>

<div class="w-full">
	<div class="flex justify-between items-center w-full">
		<h2 class="text-center text-3xl font-bold tracking-tight text-gray-900">Contact Manager</h2>
	</div>
	<form
		method="POST"
		action="?/create"
		use:enhance
		class="w-full flex flex-col"
	>
		<div class="form-control w-full max-w-xs">
			<label for="name" class="label">
				<span class="label-text">Name</span>
			</label>

			<input
				type="text"
				name="name"
				value={form?.name ?? ''}
				class="py-2 mb-1 input-bordered w-full max-w-xs rounded-md border-2"
			/>
		</div>
		<div class="form-control w-full max-w-xs">
			<label for="email" class="label">
				<span class="label-text">Email</span>
			</label>
			<input
				type="email"
				name="email"
				value={form?.email ?? ''}
				class="py-2 mb-1 input-bordered w-full max-w-xs rounded-md border-2"
			/>
		</div>
		<div class="form-control w-full max-w-xs">
			<label for="company" class="label">
				<span class="label-text">Company</span>
			</label>

			<input
				type="text"
				name="company"
				value={form?.company ?? ''}
				class="py-2 mb-1 input-bordered w-full max-w-xs rounded-md border-2"
			/>
		</div>
		<div class="form-control w-full max-w-xs">
			<label for="job" class="label">
				<span class="label-text">Job</span>
			</label>

			<input
				type="text"
				name="job"
				value={form?.job ?? ''}
				class="py-2 mb-1 input-bordered w-full max-w-xs rounded-md border-2"
			/>
		</div>
		<button class="mt-4 py-2 w-full max-w-xs bg-red-400 rounded-md">Add</button>
		{#if (!form?.ok && form?.message)}
			<Alert message={form?.message} />
		{/if}
	</form>

	<ContactsTable contacts={data?.contacts} />
</div>
