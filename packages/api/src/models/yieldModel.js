/*
 *  Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>
 *  This file (yieldModel.js) is part of LiteFarm.
 *
 *  LiteFarm is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  LiteFarm is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 *  GNU General Public License for more details, see <https://www.gnu.org/licenses/>.
 */

import { Model } from 'objection';

import softDelete from 'objection-soft-delete';

class Yield extends softDelete({ columnName: 'deleted' })(Model) {
  static get tableName() {
    return 'yield';
  }

  static get idColumn() {
    return 'yield_id';
  }
  // Optional JSON schema. This is not the database schema! Nothing is generated
  // based on this. This is only used for validation. Whenever a model instance
  // is created it is checked against this schema. http://json-schema.org/.
  static get jsonSchema() {
    return {
      type: 'object',
      required: ['crop_id', 'quantity_kg/m2', 'farm_id'],
      properties: {
        yield_id: { type: 'integer' },
        crop_id: { type: 'integer' },
        'quantity_kg/m2': { type: 'integer' },
        date: { type: 'date-time' },
        farm_id: { type: 'string' },
        deleted: { type: 'boolean' },
      },
      additionalProperties: false,
    };
  }
}

export default Yield;
